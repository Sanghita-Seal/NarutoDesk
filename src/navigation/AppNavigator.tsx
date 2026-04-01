import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import LandingScreen from "../screens/Landing/LandingScreen";

import CharacterListScreen from "../screens/Characters/CharacterListScreen";
import CharacterDetailScreen from "../screens/Characters/CharacterDetailsScreen";

import ClanListScreen from "../screens/Clans/ClanListScreen";
import ClanDetailScreen from "../screens/Clans/ClanDetailScreen";

import VillageListScreen from "../screens/Villages/VillageListScreen";
import VillageDetailScreen from "../screens/Villages/VillageDetailScreen";

import TeamListScreen from "../screens/Teams/TeamListScreen";
import TeamDetailScreen from "../screens/Teams/TeamDetailScreen";

import KekkeiGenkaiListScreen from "../screens/KekkeiGenkai/KekkeiGenkaiListScreen";
import KekkeiGenkaiDetailScreen from "../screens/KekkeiGenkai/KekkeiGenkaiDetailScreen";

import TailedBeastListScreen from "../screens/TailedBeasts/TailedBeastListScreen";
import TailedBeastDetailScreen from "../screens/TailedBeasts/TailedBeastDetailScreen";

import AkatsukiListScreen from "../screens/Akatsuki/AkatsukiListScreen";
import AkatsukiDetailScreen from "../screens/Akatsuki/AkatsukiDetailScreen";

import KaraListScreen from "../screens/Kara/KaraListScreen";
import KaraDetailScreen from "../screens/Kara/KaraDetailScreen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();


const commonHeader = {
  headerStyle: { backgroundColor: "#1b1a18" },
  headerTintColor: "#facc15",
  contentStyle: { backgroundColor: "#0b0b0b" },
  headerTitleAlign: "center" as const,
  headerTitle: () => (
    <Text style={{ color: "#facc15", fontWeight: "bold", fontSize: 18 }}>
      Naruto Explorer
    </Text>
  ),
};

const menuButton = (navigation: any) => (
  <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
    <Ionicons name="menu" size={26} color="#facc15"  style={{ marginLeft: 10 }} />
  </TouchableOpacity>
);


const CharacterStack = ({ navigation }: any) => (
  <Stack.Navigator screenOptions={commonHeader}>
    <Stack.Screen
      name="Characters"
      component={CharacterListScreen}
      options={{
        title: "Characters",
        headerLeft: () => menuButton(navigation),
      }}
    />
    <Stack.Screen name="CharacterDetail" component={CharacterDetailScreen} />
  </Stack.Navigator>
);



const createStack = (
  listName: string,
  ListComponent: any,
  DetailName: string,
  DetailComponent: any
) => {
  return ({ navigation }: any) => (
    <Stack.Navigator screenOptions={commonHeader}>
      <Stack.Screen
        name={listName}
        component={ListComponent}
        options={{
          title: listName,
          headerLeft: () => menuButton(navigation),
        }}
      />
      <Stack.Screen name={DetailName} component={DetailComponent} />
    </Stack.Navigator>
  );
};


const ClanStack = createStack("Clans", ClanListScreen, "ClanDetail", ClanDetailScreen);
const VillageStack = createStack("Villages", VillageListScreen, "VillageDetail", VillageDetailScreen);
const TeamStack = createStack("Teams", TeamListScreen, "TeamDetail", TeamDetailScreen);
const KekkeiGenkaiStack = createStack(
  "Kekkei Genkai",
  KekkeiGenkaiListScreen,
  "KekkeiGenkaiDetail",
  KekkeiGenkaiDetailScreen
);
const TailedBeastStack = createStack(
  "Tailed Beasts",
  TailedBeastListScreen,
  "TailedBeastDetail",
  TailedBeastDetailScreen
);
const AkatsukiStack = createStack("Akatsuki", AkatsukiListScreen, "AkatsukiDetail", AkatsukiDetailScreen);
const KaraStack = createStack("Kara", KaraListScreen, "KaraDetail", KaraDetailScreen);



function DrawerNavigator() {
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


export default function AppNavigator() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      
    
      <RootStack.Screen name="Landing" component={LandingScreen} />

      <RootStack.Screen name="Main" component={DrawerNavigator} />

    </RootStack.Navigator>
  );
}