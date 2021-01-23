import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import DrinkCard from "./Components/DrinkCardComponent";
import ShakeWait from "./Components/ShakeWaitComponent";

export default function App() {
  const [isLoading, setLoading] = useState(false);
  const [drinkState, setDrinkState] = useState({
    drinkName: "",
    id: 0,
    //ingredients array contains objects with ingredient and measurement props
    ingredients: [],
    instructions: "",
    image: "",
    glass: "",
  });

  let randomCocktailURL =
    "https://www.thecocktaildb.com/api/json/v1/1/random.php?api-key=1";

  useEffect(() => {
    getRandomDrink();
  }, []);

  function setNotLoading() {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

  //get random cocktail, fires on load with useEffect
  function getRandomDrink() {
    setLoading(true);
    fetch(randomCocktailURL)
      .then((res) => res.json())
      .then((response) => {
        const {
          idDrink,
          strDrink: drinkName,
          strInstructions: instructions,
          strDrinkThumb,
          strGlass: glass,
        } = response.drinks[0];
        let ingredientArr = buildIngredientsArray(response.drinks[0]);
        setDrinkState({
          drinkName: drinkName,
          id: idDrink,
          ingredients: ingredientArr,
          instructions: instructions,
          image: strDrinkThumb,
          glass: glass,
        });
      })
      .finally(() => setNotLoading());
  }

  function buildIngredientsArray(drinkObj) {
    let ingredientsArr = [];
    //database returns maximum 15 ingredient objects
    for (let i = 1; i < 15; i++) {
      let ingredient = "strIngredient" + i;
      let measurement = "strMeasure" + i;
      if (drinkObj[ingredient] === null) {
        return ingredientsArr;
      }
      ingredientsArr.push({
        ingredient: drinkObj[ingredient],
        measurement: drinkObj[measurement],
      });
    }
  }

  return (
    <PaperProvider>
      <View style={styles.container}>
        {isLoading ? (
          <ShakeWait />
        ) : (
          <DrinkCard
            image={drinkState.image}
            drinkName={drinkState.drinkName}
            ingredients={drinkState.ingredients}
            instructions={drinkState.instructions}
            glass={drinkState.glass}
            getDrink={getRandomDrink}
          />
        )}
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
