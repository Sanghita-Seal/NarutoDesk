import BaseListScreen from "../shared/BaseListScreen";
import {
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// ✅ same local image
import kgImage from "../../../assets/kekkei.png";

export default function KekkeiGenkaiListScreen() {
  const navigation = useNavigation<any>();

  const renderCard = (item: any) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("KekkeiGenkaiDetail", { item })
      }
    >
      <Image source={kgImage} style={styles.image} />

      <Text style={styles.name}>{item.name}</Text>

      <Text style={styles.sub}>
        Users: {item.characters?.length || 0}
      </Text>
    </TouchableOpacity>
  );

  return (
    <BaseListScreen
      endpoint="kekkei-genkai"
      title="Kekkei Genkai"
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