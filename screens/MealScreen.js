import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";

function renderMealItem(data) {
  return <MealItem item={data.item} />;
}

function Divider() {
  return <View style={styles.divider} />;
}

export default function MealScreen({ navigation, route }) {
  const { id } = route.params;
  const items = MEALS.filter(({ categoryIds }) => {
    return categoryIds.includes(id);
  });

  useLayoutEffect(() => {
    const cateogryTitle = CATEGORIES.find(
      (cateogry) => cateogry.id === id
    ).title;

    navigation.setOptions({ title: cateogryTitle });
  }, [navigation, id]);

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        // ItemSeparatorComponent={() => <Divider />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 20,
  },
});
