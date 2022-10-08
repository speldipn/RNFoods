import { Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import MealScreen from "./screens/MealScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import { FavoritesContextProvider } from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: "#ffffff",
        headerStyle: { backgroundColor: "#351401" },
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerActiveBackgroundColor: "#9f8d82",
        drawerActiveTintColor: "#351401",
        drawerInactiveTintColor: "#d3cdcd",
        drawerContentStyle: { backgroundColor: "#351401" },
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTintColor: "#ffffff",
              headerStyle: { backgroundColor: "#351401" },
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              name="All Categories"
              component={DrawerNavigation}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Meal" component={MealScreen} />
            <Stack.Screen
              name="Detail"
              component={MealDetailScreen}
              options={{
                headerRight: () => (
                  <Pressable
                    android_ripple={{ color: "#ccc" }}
                    style={({ pressed }) => [pressed && { opacity: 0.5 }]}
                  >
                    <Text style={styles.favoritesButton}>Favorites</Text>
                  </Pressable>
                ),
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  favoritesButton: {
    color: "#fff",
  },
});
