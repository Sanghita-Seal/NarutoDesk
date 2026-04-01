import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import the

// Character
import CharacterListScreen from "../screens/Characters/CharacterListScreen";
import CharacterDetailScreen from "../screens/Characters/CharacterDetailsScreen";

// Clans
import ClanListScreen from "../screens/Clans/ClanListScreen";
import ClanDetailScreen from "../screens/Clans/ClanDetailScreen";

// Villages
import VillageListScreen from "../screens/Villages/VillageListScreen";
import VillageDetailScreen from "../screens/Villages/VillageDetailScreen";

// Teams
import TeamListScreen from "../screens/Teams/TeamListScreen";
import TeamDetailScreen from "../screens/Teams/TeamDetailScreen";

// Kekkei Genkai
import KekkeiGenkaiListScreen from "../screens/KekkeiGenkai/KekkeiGenkaiListScreen";
import KekkeiGenkaiDetailScreen from "../screens/KekkeiGenkai/KekkeiGenkaiDetailScreen";

// Tailed Beasts
import TailedBeastListScreen from "../screens/TailedBeasts/TailedBeastListScreen";
import TailedBeastDetailScreen from "../screens/TailedBeasts/TailedBeastDetailScreen";

// Akatsuki
import AkatsukiListScreen from "../screens/Akatsuki/AkatsukiListScreen";
import AkatsukiDetailScreen from "../screens/Akatsuki/AkatsukiDetailScreen";

// Kara
import KaraListScreen from "../screens/Kara/KaraListScreen";
import KaraDetailScreen from "../screens/Kara/KaraDetailScreen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// 🔥 Common Header Left (menu button)
const menuButton = (navigation: any) => (
  <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
    <Ionicons
      name="menu"
      size={26}
      color="#eecebe"
      style={{ marginLeft: 10 }}
    />
  </TouchableOpacity>
);

// 🔥 Character Stack
const CharacterStack = ({ navigation }: any) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#1b1a18" },
      headerTintColor: "#fb7430",
      contentStyle: { backgroundColor: "#0b0b0b" },
      headerTitle: "Naruto Explorer",
      headerTitleAlign: "center",
      
    }}
  >
    <Stack.Screen
      name="Characters"
      component={CharacterListScreen}
      options={{
        title: "Characters",
        headerLeft: () => menuButton(navigation),
      }}
    />
    <Stack.Screen
      name="CharacterDetail"
      component={CharacterDetailScreen}
      options={{ title: "Details" }}
    />
  </Stack.Navigator>
);

// 🔥 Clan Stack
const ClanStack = ({ navigation }: any) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#1b1a18" },
      headerTintColor: "#fb7430",
      contentStyle: { backgroundColor: "#0b0b0b" },
    }}
  >
    <Stack.Screen
      name="Clans"
      component={ClanListScreen}
      options={{
        title: "Clans",
        headerLeft: () => menuButton(navigation),
      }}
    />
    <Stack.Screen
      name="ClanDetail"
      component={ClanDetailScreen}
      options={{ title: "Details" }}
    />
  </Stack.Navigator>
);

// 🔥 Village Stack
const VillageStack = ({ navigation }: any) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#1b1a18" },
      headerTintColor: "#fb7430",
      contentStyle: { backgroundColor: "#0b0b0b" },
    }}
  >
    <Stack.Screen
      name="Villages"
      component={VillageListScreen}
      options={{
        title: "Villages",
        headerLeft: () => menuButton(navigation),
      }}
    />
    <Stack.Screen
      name="VillageDetail"
      component={VillageDetailScreen}
      options={{ title: "Details" }}
    />
  </Stack.Navigator>
);

// 🔥 Team Stack
const TeamStack = ({ navigation }: any) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#1b1a18" },
      headerTintColor: "#fb7430",
      contentStyle: { backgroundColor: "#0b0b0b" },
    }}
  >
    <Stack.Screen
      name="Teams"
      component={TeamListScreen}
      options={{
        title: "Teams",
        headerLeft: () => menuButton(navigation),
      }}
    />
    <Stack.Screen
      name="TeamDetail"
      component={TeamDetailScreen}
      options={{ title: "Details" }}
    />
  </Stack.Navigator>
);

// 🔥 Kekkei Genkai Stack
const KekkeiGenkaiStack = ({ navigation }: any) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#1b1a18" },
      headerTintColor: "#fb7430",
      contentStyle: { backgroundColor: "#0b0b0b" },
    }}
  >
    <Stack.Screen
      name="KekkeiGenkai"
      component={KekkeiGenkaiListScreen}
      options={{
        title: "Kekkei Genkai",
        headerLeft: () => menuButton(navigation),
      }}
    />
    <Stack.Screen
      name="KekkeiGenkaiDetail"
      component={KekkeiGenkaiDetailScreen}
      options={{ title: "Details" }}
    />
  </Stack.Navigator>
);

// 🔥 Tailed Beast Stack
const TailedBeastStack = ({ navigation }: any) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#1b1a18" },
      headerTintColor: "#fb7430",
      contentStyle: { backgroundColor: "#0b0b0b" },
    }}
  >
    <Stack.Screen
      name="TailedBeasts"
      component={TailedBeastListScreen}
      options={{
        title: "Tailed Beasts",
        headerLeft: () => menuButton(navigation),
      }}
    />
    <Stack.Screen
      name="TailedBeastDetail"
      component={TailedBeastDetailScreen}
      options={{ title: "Details" }}
    />
  </Stack.Navigator>
);

// 🔥 Akatsuki Stack
const AkatsukiStack = ({ navigation }: any) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#1b1a18" },
      headerTintColor: "#fb7430",
      contentStyle: { backgroundColor: "#0b0b0b" },
    }}
  >
    <Stack.Screen
      name="Akatsuki"
      component={AkatsukiListScreen}
      options={{
        title: "Akatsuki",
        headerLeft: () => menuButton(navigation),
      }}
    />
    <Stack.Screen
      name="AkatsukiDetail"
      component={AkatsukiDetailScreen}
      options={{ title: "Details" }}
    />
  </Stack.Navigator>
);

// 🔥 Kara Stack
const KaraStack = ({ navigation }: any) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#1b1a18" },
      headerTintColor: "#fb7430",
      contentStyle: { backgroundColor: "#0b0b0b" },
    }}
  >
    <Stack.Screen
      name="Kara"
      component={KaraListScreen}
      options={{
        title: "Kara",
        headerLeft: () => menuButton(navigation),
      }}
    />
    <Stack.Screen
      name="KaraDetail"
      component={KaraDetailScreen}
      options={{ title: "Details" }}
    />
  </Stack.Navigator>
);

// 🔥 Drawer
export default function AppNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: "#2f2f3a", width: 260 },
        drawerActiveTintColor: "#facc15",
        drawerInactiveTintColor: "#fff",
        drawerLabelStyle: { fontSize: 16 },
      }}
    >
      <Drawer.Screen name="Characters" component={CharacterStack} />
      <Drawer.Screen name="Clans" component={ClanStack} />
      <Drawer.Screen name="Villages" component={VillageStack} />
      <Drawer.Screen name="Teams" component={TeamStack} />
      <Drawer.Screen name="Kekkei Genkai" component={KekkeiGenkaiStack} />
      <Drawer.Screen name="Tailed Beasts" component={TailedBeastStack} />
      <Drawer.Screen name="Akatsuki" component={AkatsukiStack} />
      <Drawer.Screen name="Kara" component={KaraStack} />
    </Drawer.Navigator>
  );
}
