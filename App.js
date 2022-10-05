import { Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import MealScreen from "./screens/MealScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{
            headerTintColor: "#ffffff",
            headerStyle: { backgroundColor: "#351401" },
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen name="Home" component={CategoriesScreen} />
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
