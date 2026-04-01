import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { theme } from "../../constants/theme";

export default function AkatsukiDetailScreen() {
  const route = useRoute<any>();
  const { item } = route.params;

  const personal = item?.personal || {};

  const affiliation = Array.isArray(personal.affiliation)
    ? personal.affiliation.join(", ")
    : personal.affiliation || "Akatsuki";

  const classification = Array.isArray(personal.classification)
    ? personal.classification.join(", ")
    : personal.classification || "Unknown";

  const partners = Array.isArray(personal.partner)
    ? personal.partner
    : [];

  const jutsuList = Array.isArray(item?.jutsu)
    ? item.jutsu
    : [];

  const natureList = Array.isArray(item?.natureType)
    ? item.natureType
    : [];

  const image =
    item?.images?.[0] ||
    "https://i.imgur.com/6VBx3io.png";

  return (
    <ScrollView style={styles.container}>
      
      <Image source={{ uri: image }} style={styles.image} />

      <Text style={styles.name}>
        {item?.name || "Unknown"}
      </Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          Information
        </Text>

        <Text style={styles.label}>
          Status:{" "}
          <Text style={styles.value}>
            {personal.status || "Unknown"}
          </Text>
        </Text>

        <Text style={styles.label}>
          Species:{" "}
          <Text style={styles.value}>
            {personal.species || "Unknown"}
          </Text>
        </Text>

        <Text style={styles.label}>
          Classification:{" "}
          <Text style={styles.value}>
            {classification}
          </Text>
        </Text>

        <Text style={styles.label}>
          Affiliation:{" "}
          <Text style={styles.value}>
            {affiliation}
          </Text>
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          Jutsu
        </Text>

        {jutsuList.length > 0 ? (
          jutsuList.map((j: string, i: number) => (
            <View key={i} style={styles.jutsuItem}>
              <Text style={styles.jutsuText}>
                {j}
              </Text>
            </View>
          ))
        ) : (
          <Text style={styles.value}>
            No Data
          </Text>
        )}
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          Nature Types
        </Text>

        {natureList.length > 0 ? (
          natureList.map((type: string, i: number) => (
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

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          Partners
        </Text>

        {partners.length > 0 ? (
          partners.map((p: string, i: number) => (
            <Text key={i} style={styles.value}>
              • {p}
            </Text>
          ))
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
    backgroundColor: "#0b0b0b",
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
    color: theme.primary,
    textAlign: "center",
  },
  card: {
    backgroundColor: theme.card,
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#facc15",
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: theme.subText,
  },
  value: {
    fontWeight: "600",
    color: theme.text,
  },
  jutsuItem: {
    padding: 10,
    backgroundColor: "#2a2a2a",
    borderRadius: 10,
    marginBottom: 8,
  },
  jutsuText: {
    fontSize: 14,
    color: theme.text,
  },
});