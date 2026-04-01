import BaseListScreen from "../shared/BaseListScreen";
import {
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AkatsukiListScreen() {
  const navigation = useNavigation<any>();

  const renderCard = (item: any) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("AkatsukiDetail", { item })
      }
    >
      {/* ✅ API image */}
      <Image
        source={{
          uri:
            item.images?.[0] ||
            "https://i.imgur.com/6VBx3io.png",
        }}
        style={styles.image}
      />

      <Text style={styles.name}>{item.name}</Text>

      <Text style={styles.sub}>
        {item.personal?.classification?.[0] ||
          "Akatsuki Member"}
      </Text>
    </TouchableOpacity>
  );

  return (
    <BaseListScreen
      endpoint="akatsuki"
      title="Akatsuki"
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
    borderRadius: 14,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: 6,
  },
  sub: {
    color: "#aaa",
    fontSize: 12,
  },
});