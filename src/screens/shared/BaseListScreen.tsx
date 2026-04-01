import { View, FlatList, ActivityIndicator, StyleSheet, Text, TextInput } from "react-native";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { getGenericData } from "../../services/api";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../constants/theme";

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
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

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
      setVisibleData(res); // initial render
    } catch (err) {
      console.log(`Error loading ${endpoint}:`, err);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (isSearching) return; // 🚫 STOP during search

    setVisibleData((prev) => [...prev, ...data]);
  };
  const handleSearch = (text: string) => {
    setSearch(text);

    if (!text.trim()) {
      setIsSearching(false);
      setVisibleData(data);
      return;
    }

    setIsSearching(true);

    const filtered = data.filter((item: any) =>
      item.name?.toLowerCase().includes(text.toLowerCase()),
    );

    setVisibleData(filtered);
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
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={18}
          color="#aaa"
          style={{ marginRight: 8 }}
        />

        <TextInput
          placeholder="Search characters..."
          placeholderTextColor="#888"
          value={search}
          onChangeText={handleSearch}
          style={styles.searchInput}
        />
      </View>

      <Text style={styles.heading}>{title}</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#18181b",
  },
  heading: {
    color: theme.primary,
    paddingLeft:10,
    fontSize: 25,
   
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#18181b",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#27272a",
    borderRadius: 14,
    paddingHorizontal: 12,
    marginBottom: 12,

    // subtle elevation
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },

  searchInput: {
    flex: 1,
    color: "#fff",
    paddingVertical: 10,
    fontSize: 14,
  },
});
