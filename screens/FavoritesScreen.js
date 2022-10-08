import { useContext } from "react";
import { View, Text } from "react-native";
import MealList from "../components/MealList";
import FavoritesContext from "../store/context/favorites-context";

function FavoritesScreen() {
  const { ids } = useContext(FavoritesContext);
  return (
    <View>
      <MealList mealIds={ids} />
    </View>
  );
}

export default FavoritesScreen;
