import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { theme } from "../../constants/theme";


export default function BaseDetailScreen() {
  const route = useRoute<any>();
  const { item, endpoint } = route.params;

  return (
    <ScrollView style={styles.container}>
      
      {item.images?.[0] && (
        <Image
          source={{ uri: item.images[0] }}
          style={styles.image}
        />
      )}

      <Text style={styles.title}>
        {item.name || "Unknown"}
      </Text>

      <View style={styles.card}>
        {Object.entries(item).map(([key, value]) => {
          if (key === "images" || key === "name") return null;

          return (
            <View key={key} style={styles.row}>
              <Text style={styles.label}>{key}:</Text>
              <Text style={styles.value}>
                {formatValue(value)}
              </Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}


function formatValue(value: any): string {
  if (Array.isArray(value)) {
    return value.join(", ");
  }

  if (typeof value === "object" && value !== null) {
    return JSON.stringify(value);
  }

  return String(value);
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
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#27272a",
    borderRadius: 14,
    padding: 14,
  },
  row: {
    marginBottom: 8,
  },
  label: {
    color: "#facc15",
    fontWeight: "bold",
  },
  value: {
    color: "#e4e4e7",
  },
});