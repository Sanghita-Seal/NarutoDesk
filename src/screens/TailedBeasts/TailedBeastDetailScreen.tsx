import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { useRoute } from "@react-navigation/native";

export default function TailedBeastDetailScreen() {
  const route = useRoute<any>();
  const { item } = route.params;

  return (
    <ScrollView style={styles.container}>
      
      {/* Image */}
      <Image
        source={{
          uri:
            item.images?.[0] ||
            "https://i.imgur.com/6VBx3io.png",
        }}
        style={styles.image}
      />

      {/* Name */}
      <Text style={styles.name}>{item.name}</Text>

      {/* Info */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          Information
        </Text>

        <Text style={styles.label}>
          Status:{" "}
          <Text style={styles.value}>
            {item.personal?.status || "Unknown"}
          </Text>
        </Text>

        <Text style={styles.label}>
          Classification:{" "}
          <Text style={styles.value}>
            {item.personal?.classification ||
              "Unknown"}
          </Text>
        </Text>
      </View>

      {/* Jutsu */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          Jutsu
        </Text>

        {item.jutsu?.length > 0 ? (
          item.jutsu.slice(0, 6).map((jutsu: string, i: number) => (
            <View key={i} style={styles.jutsuItem}>
              <Text style={styles.jutsuText}>
                {jutsu}
              </Text>
            </View>
          ))
        ) : (
          <Text style={styles.value}>
            No Jutsu Data
          </Text>
        )}
      </View>

      {/* Nature Types */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          Nature Types
        </Text>

        {item.natureType?.length > 0 ? (
          item.natureType.map((type: string, i: number) => (
            <Text key={i} style={styles.value}>
              • {type}
            </Text>
          ))
        ) : (
          <Text style={styles.value}>
            No Data
          </Text>
        )}
      </View>

      {/* Jinchuriki */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          Jinchūriki
        </Text>

        {item.personal?.jinchūriki?.length > 0 ? (
          item.personal.jinchūriki.map(
            (j: string, i: number) => (
              <Text key={i} style={styles.value}>
                • {j}
              </Text>
            )
          )
        ) : (
          <Text style={styles.value}>
            No Data
          </Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5e9d7",
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