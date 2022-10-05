import { useLayoutEffect } from "react";
import { Text, StyleSheet, FlatList, Pressable, Platform } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

function CategoryItem({ title, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: color },
        pressed && { opacity: 0.5 },
      ]}
      android_ripple={{ color: "#ccc" }}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

function CategoriesScreen({ navigation, route }) {
  useLayoutEffect(() => {
    navigation.setOptions({ title: "All Categories" });
  }, [navigation]);

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CategoryItem
          title={item.title}
          color={item.color}
          onPress={() => navigation.navigate("Meal", { id: item.id })}
        />
      )}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 150,
    borderRadius: 8,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#000000",
    elevation: 4,
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  text: { fontSize: 20, fontWeight: "bold", color: "#000000" },
});

export default CategoriesScreen;
