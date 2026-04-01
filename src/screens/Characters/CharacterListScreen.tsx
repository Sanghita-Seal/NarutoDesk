import BaseListScreen from "../shared/BaseListScreen";
import { Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../../constants/theme";


export default function CharacterListScreen() {
  const navigation = useNavigation<any>();

  const renderCard = (item: any) => {
    const clan =
      item?.personal?.clan ||
      (Array.isArray(item?.clan) ? item.clan[0] : item?.clan) ||
      "Unknown Clan";

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate("CharacterDetail", { item })
        }
      >
        <Image
          source={{
            uri:
              item.images?.[0] ||
              "https://i.imgur.com/6VBx3io.png",
          }}
          style={styles.image}
        />

        <Text style={styles.name}>{item.name}</Text>

        <Text style={styles.sub}>{clan}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <BaseListScreen
      endpoint="characters"
      title="Characters"
      navigation={navigation}
      renderCard={renderCard}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: theme.card,
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