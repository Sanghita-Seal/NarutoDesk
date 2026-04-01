import BaseListScreen from "../shared/BaseListScreen";
import {
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// ✅ reuse same image
import teamImage from "../../../assets/clan.png";

export default function TeamListScreen() {
  const navigation = useNavigation<any>();

  const renderCard = (item: any) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("TeamDetail", { item })
      }
    >
      <Image source={teamImage} style={styles.image} />

      <Text style={styles.name}>{item.name}</Text>

      <Text style={styles.sub}>
        Members: {item.characters?.length || 0}
      </Text>
    </TouchableOpacity>
  );

  return (
    <BaseListScreen
      endpoint="teams"
      title="Teams"
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