import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useEffect, useRef } from "react";
import { theme } from "../../constants/theme";


export default function LandingScreen({ navigation }: any) {
  const glowAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: false,
        }),
        Animated.timing(glowAnim, {
          toValue: 0,
          duration: 1200,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  }, []);

  const glow = glowAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.2, 0.8],
  });

  return (
    <ImageBackground
      source={require("../../../assets/landing.jpg")}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Naruto Explorer</Text>
        <Text style={styles.subtitle}>Explore the Shinobi World</Text>

        <Animated.View
          style={[
            styles.buttonWrapper,
            {
              shadowOpacity: glow,
            },
          ]}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.replace("Main", {
                screen: "Characters",
              })
            }
          >
            <Text style={styles.buttonText}>Enter the World</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: theme.primary,
  },
  subtitle: {
    color:theme.subText,
    marginBottom: 30,
  },
  buttonWrapper: {
    shadowColor: theme.primary,
    shadowRadius: 15,
    elevation: 10,
  },
  button: {
    backgroundColor: theme.primary,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 30,
  },
  buttonText: {
    color: theme.text,
    fontWeight: "bold",
  },
});
