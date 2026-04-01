import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/native";


export default function CharacterDetailScreen() {
  const route = useRoute<any>();
  const { item } = route.params;

  return (
    <ScrollView style={styles.container}>
      
      {/* Image */}
      <Image
        source={{
          uri:
            item.images?.[0] ||
            "https://via.placeholder.com/300",
        }}
        style={styles.image}
      />

      {/* Name */}
      <Text style={styles.name}>{item.name}</Text>

      {/* Info Card */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Information</Text>

        <Text style={styles.label}>
          Status:{" "}
          <Text style={styles.value}>
            {item.personal?.status || "Unknown"}
          </Text>
        </Text>

        <Text style={styles.label}>
          Clan:{" "}
          <Text style={styles.value}>
            {item.clan?.[0] || "Unknown"}
          </Text>
        </Text>

        <Text style={styles.label}>
          Affiliation:{" "}
          <Text style={styles.value}>
            {item.personal?.affiliation?.join(", ") ||
              "Unknown"}
          </Text>
        </Text>
      </View>

      {/* Jutsu Section */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          Known Jutsu
        </Text>

        {item.jutsu && item.jutsu.length > 0 ? (
          item.jutsu.slice(0, 6).map((jutsu: string, index: number) => (
            <View key={index} style={styles.jutsuItem}>
              <Text style={styles.jutsuText}>{jutsu}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.value}>No Jutsu Data</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5e9d7", // light Naruto theme
    padding: 12,
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 16,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 12,
    marginBottom: 10,
    color: "#3f2d20",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#e76f00",
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: "#444",
  },
  value: {
    fontWeight: "600",
    color: "#222",
  },
  jutsuItem: {
    padding: 10,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    marginBottom: 8,
  },
  jutsuText: {
    fontSize: 14,
    color: "#333",
  },
});
