import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import DrinkCard from "./Components/DrinkCardComponent";
import ShakeWait from "./Components/ShakeWaitComponent";

export default function App() {
  const [isLoading, setLoading] = useState(false);
  const [drinkState, setDrinkState] = useState({
    drinkName: "",
    id: 0,
    //ingredients array is doublets with ingredient and measurement
    ingredients: [],
    instructions: "",
    image: "",
  });

  let randomCocktailURL =
    "https://www.thecocktaildb.com/api/json/v1/1/random.php?api-key=1";
  //let searchCocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?api-key=1&s=";

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
        } = response.drinks[0];
        let ingredientArr = buildIngredientsArray(response.drinks[0]);
        setDrinkState({
          drinkName: drinkName,
          id: idDrink,
          ingredients: ingredientArr,
          instructions: instructions,
          image: strDrinkThumb,
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
      ingredientsArr.push([drinkObj[ingredient], drinkObj[measurement]]);
    }
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ShakeWait />
      ) : (
        <DrinkCard
          image={drinkState.image}
          drinkName={drinkState.drinkName}
          ingredients={drinkState.ingredients}
          instructions={drinkState.instructions}
        />
        // <Image source={{uri: drinkState.image }} style={{ width: 350, height: 450 }}/>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
