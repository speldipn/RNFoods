import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

export default function MealScreen({ navigation, route }) {
  const { id } = route.params;
  const mealIds = MEALS.filter(({ categoryIds }) => {
    return categoryIds.includes(id);
  }).map((mealItem) => mealItem.id);

  useLayoutEffect(() => {
    const cateogryTitle = CATEGORIES.find(
      (cateogry) => cateogry.id === id
    ).title;

    navigation.setOptions({ title: cateogryTitle });
  }, [navigation, id]);

  return (
    <View style={styles.container}>
      <MealList mealIds={mealIds} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 32,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 20,
  },
});
