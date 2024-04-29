import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Entry from "../../screens/Entry";
import MyNotes from "../../screens/MyNotes";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Entry"
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName = "home";

          if (route.name === "Minhas Notas") {
            iconName = "folder";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#8F00FF",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}>
      <Tab.Screen name="Início" component={Entry} />
      <Tab.Screen name="Minhas Notas" component={MyNotes} />
    </Tab.Navigator>
  );
}
