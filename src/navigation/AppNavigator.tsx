import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Character Screens
import CharacterListScreen from "../screens/Characters/CharacterListScreen";
import CharacterDetailScreen from "../screens/Characters/CharacterDetailsScreen";

// Other Screens
import ClanListScreen from "../screens/Clans/ClanListScreen";
import VillageListScreen from "../screens/Villages/VillageListScreen";
import TeamListScreen from "../screens/Teams/TeamListScreen";
// (You can add others later similarly)

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


// 🔥 Character Stack (has detail screen)
const CharacterStack = ({ navigation }: any) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#1b1a18" },
        headerTintColor: "#fb7430",
        contentStyle: { backgroundColor: "#a2a2ca" },
      }}
    >
      <Stack.Screen
        name="Characters"
        component={CharacterListScreen}
        options={{
          title: "Characters",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Ionicons
                name="menu"
                size={26}
                color="#eecebe"
                style={{ marginLeft: 10 }}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="CharacterDetail"
        component={CharacterDetailScreen}
        options={{ title: "Details" }}
      />
    </Stack.Navigator>
  );
};


// 🔥 Simple Stack Factory (for non-detail screens)
const createSimpleStack = (ScreenComponent: any, title: string) => {
  return ({ navigation }: any) => (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#18181b" },
        headerTintColor: "#fff",
        contentStyle: { backgroundColor: "#18181b" },
      }}
    >
      <Stack.Screen
        name={title}
        component={ScreenComponent}
        options={{
          title,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Ionicons
                name="menu"
                size={26}
                color="#fff"
                style={{ marginLeft: 10 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};


// 🔥 Create stacks
const ClanStack = createSimpleStack(ClanListScreen, "Clans");
const VillageStack = createSimpleStack(VillageListScreen, "Villages");
const TeamStack = createSimpleStack(TeamListScreen, "Teams");


// 🔥 Drawer Navigator
export default function AppNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#2f2f3a",
          width: 260,
        },
        drawerActiveTintColor: "#facc15",
        drawerInactiveTintColor: "#fff",
        drawerLabelStyle: {
          fontSize: 16,
        },
      }}
    >
      <Drawer.Screen name="Characters" component={CharacterStack} />
      <Drawer.Screen name="Clans" component={ClanStack} />
      <Drawer.Screen name="Villages" component={VillageStack} />
      <Drawer.Screen name="Teams" component={TeamStack} />

      {/* Add later */}
      {/* KekkeiGenkai */}
      {/* Akatsuki */}
      {/* Kara */}
    </Drawer.Navigator>
  );
}