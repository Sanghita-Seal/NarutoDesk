import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

// ✅ same image
import kgImage from "../../../assets/kekkei.png";

export default function KekkeiGenkaiDetailScreen() {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { item } = route.params;

  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const requests = item.characters.map((id: number) =>
        fetch(`https://dattebayo-api.onrender.com/characters/${id}`)
          .then((res) => res.json())
      );

      const results = await Promise.all(requests);
      setMembers(results);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      
      {/* Top Image */}
      <Image source={kgImage} style={styles.image} />

      {/* Name */}
      <Text style={styles.name}>{item.name}</Text>

      {/* Info */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          Kekkei Genkai Info
        </Text>

        <Text style={styles.label}>
          Total Users:{" "}
          <Text style={styles.value}>
            {item.characters?.length || 0}
          </Text>
        </Text>
      </View>

      {/* Members */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Users</Text>

        {loading ? (
          <ActivityIndicator size="large" color="#e76f00" />
        ) : members.length > 0 ? (
          members.map((char) => (
            <TouchableOpacity
              key={char.id}
              style={styles.memberCard}
              onPress={() =>
                navigation.navigate("CharacterDetail", {
                  item: char,
                })
              }
            >
              <Image
                source={{
                  uri:
                    char.images?.[0] ||
                    "https://i.imgur.com/6VBx3io.png",
                }}
                style={styles.memberImage}
              />

              <Text style={styles.memberName}>
                {char.name}
              </Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.value}>
            No Users Found
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
  memberCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#f1f1f1",
    padding: 10,
    borderRadius: 10,
  },
  memberImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  memberName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
});