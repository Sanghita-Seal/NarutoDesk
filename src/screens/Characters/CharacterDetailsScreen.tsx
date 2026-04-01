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

  const personal = item?.personal || {};

  // 🔥 SAFE CLAN
  const clan =
    personal.clan ||
    (Array.isArray(item?.clan) ? item.clan[0] : item?.clan) ||
    "Unknown";

  // 🔥 UNIVERSAL RENDER
  const renderData = (data: any) => {
    if (!data) return <Text style={styles.value}>No Data</Text>;

    if (Array.isArray(data)) {
      return data.map((d, i) => (
        <Text key={i} style={styles.value}>
          • {d}
        </Text>
      ));
    }

    if (typeof data === "object") {
      return Object.entries(data).map(([key, value], i) => (
        <Text key={i} style={styles.value}>
          <Text style={styles.key}>{key}: </Text>
          {String(value)}
        </Text>
      ));
    }

    return <Text style={styles.value}>{data}</Text>;
  };

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

      {/* 🔥 BASIC INFO */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Basic Info</Text>

        <Text style={styles.value}>
          <Text style={styles.key}>Status: </Text>
          {personal.status || "Unknown"}
        </Text>

        <Text style={styles.value}>
          <Text style={styles.key}>Clan: </Text>
          {clan}
        </Text>

        <Text style={styles.value}>
          <Text style={styles.key}>Gender: </Text>
          {personal.sex || "Unknown"}
        </Text>

        <Text style={styles.value}>
          <Text style={styles.key}>Birthdate: </Text>
          {personal.birthdate || "Unknown"}
        </Text>
      </View>

      {/* 🔥 AFFILIATION */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Affiliation</Text>
        {renderData(personal.affiliation)}
      </View>

      {/* 🔥 FAMILY */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Family</Text>
        {renderData(item.family)}
      </View>

      {/* 🔥 NATURE */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Nature Types</Text>
        {renderData(item.natureType)}
      </View>

      {/* 🔥 KEKKEI GENKAI */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Kekkei Genkai</Text>
        {renderData(personal.kekkeiGenkai)}
      </View>

      {/* 🔥 CLASSIFICATION */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Classification</Text>
        {renderData(personal.classification)}
      </View>

      {/* 🔥 OCCUPATION */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Occupation</Text>
        {renderData(personal.occupation)}
      </View>

      {/* 🔥 TEAM */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Team</Text>
        {renderData(personal.team)}
      </View>

      {/* 🔥 TOOLS */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Tools</Text>
        {renderData(item.tools)}
      </View>

      {/* 🔥 RANK */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Rank</Text>
        {renderData(item.rank?.ninjaRank)}
      </View>

      {/* 🔥 JUTSU */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Jutsu</Text>

        {item.jutsu?.length > 0 ? (
          item.jutsu.slice(0, 10).map((j: string, i: number) => (
            <View key={i} style={styles.jutsuItem}>
              <Text style={styles.jutsuText}>{j}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.value}>No Data</Text>
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
    marginBottom: 12,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#e76f00",
    marginBottom: 8,
  },
  key: {
    fontWeight: "bold",
    color: "#e76f00",
  },
  value: {
    fontSize: 14,
    color: "#333",
    marginTop: 4,
  },
  jutsuItem: {
    padding: 10,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    marginTop: 8,
  },
  jutsuText: {
    fontSize: 14,
    color: "#333",
  },
});