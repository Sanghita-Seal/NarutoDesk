import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import BaseListScreen from "../shared/BaseListScreen";

// 🔥 fallback for clans
const CLAN_IMAGE =
  "https://i.imgur.com/8Km9tLL.png";

export default function ClanListScreen() {
  const navigation = useNavigation<any>();

  const renderCard = (item: any): React.ReactElement => {
    const imageUri =
      item.images?.[0] || CLAN_IMAGE;

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate("Detail", {
            item,
            endpoint: "clans",
          })
        }
      >
        {/* SAME UI AS CHARACTER */}
        <Image
          source={{ uri: imageUri }}
          style={styles.image}
        />

        <Text style={styles.name} numberOfLines={1}>
          {item.name}
        </Text>

        <Text style={styles.sub}>
          Members: {item.characters?.length || 0}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <BaseListScreen
      endpoint="clans"
      title="Clans"
      navigation={navigation}
      renderCard={renderCard}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: "#27272a",
    borderRadius: 16,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  name: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 8,
  },
  sub: {
    color: "#a1a1aa",
    fontSize: 12,
    marginTop: 2,
  },
});