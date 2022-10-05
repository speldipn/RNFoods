import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  Pressable,
} from "react-native";

function MealItem({ item }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate("Detail", { id: item.id })}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [pressed && { opacity: 0.5 }]}
      >
        <View style={styles.innerContainer}>
          <Image style={styles.image} source={{ uri: item.imageUrl }} />
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{item.duration}m</Text>
            <Text style={styles.detailItem}>
              {item.complexity.toUpperCase()}
            </Text>
            <Text style={styles.detailItem}>
              {item.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    marginTop: 30,
    marginHorizontal: 30,
    overflow: Platform.OS === "ios" ? "hidden" : "visible",
    backgroundColor: "#ffffff",
    elevation: 4,
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: {},
  title: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    margin: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 14,
  },
});

export default MealItem;
