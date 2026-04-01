import BaseListScreen from "../shared/ListScreen";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function VillageListScreen() {
  const navigation = useNavigation<any>();

  const renderCard = (item: any) => (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>

      <Text style={styles.sub}>
        Country: {item.country || "Unknown"}
      </Text>
    </TouchableOpacity>
  );

  return (
    <BaseListScreen
      endpoint="villages"
      title="Villages"
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
    padding: 16,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  sub: {
    color: "#a1a1aa",
    marginTop: 4,
  },
});