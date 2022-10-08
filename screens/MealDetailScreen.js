import { useLayoutEffect, useContext, useState, useEffect } from "react";
import {
  ScrollView,
  Image,
  Text,
  StyleSheet,
  View,
  Pressable,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import Ionicons from "@expo/vector-icons/Ionicons";
import FavoritesContext from "../store/context/favorites-context";

function Subtitle({ title }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{title}</Text>
    </View>
  );
}

function List({ data }) {
  return data.map((item, index) => (
    <View key={index} style={styles.listContainer}>
      <Text style={styles.listItem}>{item}</Text>
    </View>
  ));
}

function IconButton({ id }) {
  const { ids, addFovorites, removeFavorites } = useContext(FavoritesContext);
  const [isFavorite, setIsFavorite] = useState(ids.includes(id));

  function addId(id) {
    setIsFavorite(true);
    addFovorites(id);
  }

  function removeId(id) {
    setIsFavorite(false);
    removeFavorites(id);
  }

  function setFavorites() {
    if (isFavorite) {
      removeId(id);
    } else {
      addId(id);
    }
  }

  return (
    <Pressable
      onPress={() => setFavorites()}
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => [pressed && { opacity: 0.7 }]}
    >
      <Ionicons
        name={isFavorite ? "star" : "star-outline"}
        size={24}
        color="#ffffff"
      />
    </Pressable>
  );
}

export default function MealDetailScreen({ navigation, route }) {
  const itemId = route.params.id;
  const item = MEALS.find((item) => {
    return item.id === itemId;
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: item.title,
      headerRight: () => <IconButton id={itemId} />,
    });
  }, [navigation, item]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.rootCotnaienr}>
        <Image style={styles.image} source={{ uri: item.imageUrl }} />
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.detailContainer}>
          <Text style={styles.detailItem}>{item.duration}</Text>
          <Text style={styles.detailItem}>{item.complexity}</Text>
          <Text style={styles.detailItem}>{item.affordability}</Text>
        </View>

        <Subtitle title="Ingredients" />
        <List data={item.ingredients} />
        <Subtitle title="Ingredients" />
        <List data={item.steps} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rootCotnaienr: {
    paddingBottom: 32,
  },
  ingredientsBox: {
    borderWidth: 1,
    padding: 10,
    margin: 20,
  },
  text: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "400",
  },
  image: {
    width: "100%",
    height: 300,
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 8,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  listContainer: {
    marginHorizontal: 24,
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 8,
  },
  listItem: {
    backgroundColor: "#e2b497",
    textAlign: "center",
    padding: 6,
  },
  title: {
    marginVertical: 10,
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  detailItem: {
    color: "#ccc",
    fontSize: 13,
    marginEnd: 6,
  },
});
