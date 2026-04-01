import BaseListScreen from "../shared/BaseListScreen";
import {
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../../constants/theme";


import clanImage from "../../../assets/clan.png";

export default function ClanListScreen() {
  const navigation = useNavigation<any>();

  const renderCard = (item: any) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("ClanDetail", { item })
      }
    >
      <Image source={clanImage} style={styles.image} />

      <Text style={styles.name}>{item.name}</Text>

      <Text style={styles.sub}>
        Members: {item.characters?.length || 0}
      </Text>
    </TouchableOpacity>
  );

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
    backgroundColor: theme.background,
    borderRadius: 14,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  name: {
    color: theme.text,
    fontWeight: "bold",
    marginTop: 6,
  },
  sub: {
    color: theme.subText,
    fontSize: 12,
  },
});