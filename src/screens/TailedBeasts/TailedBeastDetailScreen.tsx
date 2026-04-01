import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { theme } from "../../constants/theme";


export default function TailedBeastDetailScreen() {
  const route = useRoute<any>();
  const { item } = route.params;

  return (
    <ScrollView style={styles.container}>
      
      <Image
        source={{
          uri:
            item.images?.[0] ||
            "https://i.imgur.com/6VBx3io.png",
        }}
        style={styles.image}
      />

      <Text style={styles.name}>{item.name}</Text>

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
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color:theme.primary,
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
    borderRadius: 10,
    marginBottom: 8,
  },
  jutsuText: {
    fontSize: 14,
    color:theme.subText,
  },
});