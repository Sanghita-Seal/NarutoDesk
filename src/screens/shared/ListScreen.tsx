import {
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useEffect, useState, useLayoutEffect } from "react";
import { getGenericData } from "../../services/api";
import { Ionicons } from "@expo/vector-icons";

export default function BaseListScreen({
  endpoint,
  title,
  navigation,
  renderCard,
}: any) {
  const [data, setData] = useState<any[]>([]);
  const [visibleData, setVisibleData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title,
      headerLeft: () => (
        <Ionicons
          name="menu"
          size={26}
          color="#fff"
          style={{ marginLeft: 10 }}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    });
  }, []);

  const loadData = async () => {
    try {
      const res = await getGenericData(endpoint);
      setData(res);
      setVisibleData(res);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    setVisibleData((prev) => [...prev, ...data]);
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#facc15" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={visibleData}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        renderItem={({ item }) => renderCard(item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#18181b",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#18181b",
  },
});