import {
  FontAwesome,
  MaterialIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import { Stack, Tabs } from "expo-router";
import { Text } from "react-native";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons
              size={22}
              name={focused ? "home" : "home-outline"}
              color={focused ? "#004f2d" : "#919191"}
            />
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? "#004f2d" : "#919191",
                fontSize: 10,
                fontWeight: 600,
              }}
            >
              Home
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="locals"
        options={{
          title: "Locais",
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons
              size={22}
              name={focused ? "map-sharp" : "map-outline"}
              color={focused ? "#004f2d" : "#919191"}
            />
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? "#004f2d" : "#919191",
                fontSize: 10,
                fontWeight: 600,
              }}
            >
              Locais
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="sair"
        options={{
          title: "Sair",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              size={22}
              name="logout"
              color={focused ? "#004f2d" : "#919191"}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "#004f2d" : "#919191",
                fontSize: 10,
                fontWeight: "600",
              }}
            >
              Sair
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}
