import { FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "./MealItem";

function renderMealItem(data) {
  return <MealItem item={data.item} />;
}

function MealList({ mealIds }) {
  const items = MEALS.filter(({ id }) => {
    return mealIds.includes(id);
  });

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderMealItem}
    />
  );
}

export default MealList;
