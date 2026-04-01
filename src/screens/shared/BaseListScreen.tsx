import { View, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { getGenericData } from "../../services/api";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  endpoint: string;
  title: string;
  navigation: any;
  renderCard: (item: any) => React.ReactElement;
};

export default function BaseListScreen({
  endpoint,
  title,
  navigation,
  renderCard,
}: Props) {
  const [data, setData] = useState<any[]>([]);
  const [visibleData, setVisibleData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔥 Load data
  useEffect(() => {
    loadData();
  }, []);

  // 🔥 Header setup (drawer + title)
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
      setVisibleData(res); // initial render
    } catch (err) {
      console.log(`Error loading ${endpoint}:`, err);
    } finally {
      setLoading(false);
    }
  };

  // 🔥 Fake infinite scroll
  const loadMore = () => {
    if (!data || data.length === 0) return;

    setVisibleData((prev) => [...prev, ...data]);
  };

  // 🔥 Loader
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
        contentContainerStyle={{ paddingBottom: 20 }}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        renderItem={({ item }) => renderCard(item) as React.ReactElement}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

// 🔥 Styles
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
