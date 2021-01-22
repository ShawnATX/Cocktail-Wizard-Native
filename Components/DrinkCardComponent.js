import React, { useState } from "react";
import {
  ImageBackground,
  Image,
  Platform,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";
import { List, Paragraph, Title, Surface } from "react-native-paper";

const DrinkCard = (props) => {
  const { drinkName, id, ingredients, instructions, image, glass } = props;

  const [expanded, setExpanded] = useState(false);

  const handlePress = () => setExpanded(!expanded);

  function getIngredientList() {
    const ingredientList = ingredients.map((ingredient, i) => (
      <List.Item
        key={i}
        title={ingredient.ingredient}
        description={ingredient.measurement}
      />
    ));
    return ingredientList;
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Title style={styles.heading}>{drinkName}</Title>
        </View>
        <Surface style={styles.surface}>
          <Image
            source={{ uri: image }}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </Surface>
        <View style={styles.center}>
          <Paragraph style={styles.instructions}>{instructions}</Paragraph>
        </View>
      </View>
      <List.Section style={styles.ingredientList}>
        <List.Accordion
          title="Ingredients"
          expanded={expanded}
          onPress={handlePress}
        >
          {getIngredientList()}
        </List.Accordion>
      </List.Section>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  heading: {
    textAlign: "center",
    justifyContent: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 40,
    textShadowColor: "grey",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "0",
  },
  center: {
    paddingTop: 5,
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "column-reverse",
  },
  surface: {
    padding: 6,
    height: 350,
    width: 350,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  instructions: {
    paddingTop: 8,
    justifyContent: "flex-end",
    flex: 1,
    fontSize: 24,
    color: "black",
  },
  ingredientList: {
    backgroundColor: "#fff",
  },
  footer: {
    flex: 1,
    flexDirection: "column-reverse",
  },
});

export default DrinkCard;
