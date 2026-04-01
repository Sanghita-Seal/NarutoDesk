import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { theme } from "../../constants/theme";


export default function KaraDetailScreen() {
  const route = useRoute<any>();
  const { item } = route.params;

  const personal = item?.personal || {};

  const affiliation = Array.isArray(personal.affiliation)
    ? personal.affiliation.join(", ")
    : personal.affiliation || "Unknown";

  const kekkei = Array.isArray(personal.kekkeiGenkai)
    ? personal.kekkeiGenkai.join(", ")
    : personal.kekkeiGenkai || "None";

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
          Gender:{" "}
          <Text style={styles.value}>
            {personal.sex || "Unknown"}
          </Text>
        </Text>

        <Text style={styles.label}>
          Status:{" "}
          <Text style={styles.value}>
            {personal.status || "Unknown"}
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
              <Text style={styles.jutsuText}>{j}</Text>
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
          Kekkei Genkai
        </Text>

        <Text style={styles.value}>
          {kekkei}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
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
    color: theme.primary,
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: theme.text,
  },
  value: {
    fontWeight: "600",
    color: theme.subText,
  },
  jutsuItem: {
    padding: 10,
    backgroundColor: theme.subCard,
    borderRadius: 15,
    marginBottom: 8,
  },
  jutsuText: {
    fontSize: 14,
    color: theme.subText,
  },
});