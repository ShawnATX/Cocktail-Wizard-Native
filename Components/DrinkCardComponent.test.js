import React from "react";
import DrinkCardComponent from "./DrinkCardComponent";
import theme from "../Styles/Theme";
import { render, fireEvent } from "@testing-library/react-native";

const drinkState = {
  drinkName: "Frozen Mint Daiquiri",
  glass: "Old-fashioned glass",
  id: "11390",
  image:
    "https://www.thecocktaildb.com/images/media/drink/jrhn1q1504884469.jpg",
  ingredients: [
    {
      ingredient: "Light rum",
      measurement: "2 oz ",
    },
    {
      ingredient: "Light rum",
      measurement: "1 tblsp ",
    },
    {
      ingredient: "Light rum",
      measurement: "6 ",
    },
    {
      ingredient: "Light rum",
      measurement: "1 tsp ",
    },
  ],
  instructions: "Combine all ingredients with 1 cup of crushed ice",
};
const getRandomDrink = () => {};

describe("Testing Drink Card Component", () => {
  test("component containt title", async () => {
    const component = (
      <DrinkCardComponent
        image={drinkState.image}
        drinkName={drinkState.drinkName}
        ingredients={drinkState.ingredients}
        instructions={drinkState.instructions}
        glass={drinkState.glass}
        getDrink={getRandomDrink}
        theme={theme}
      />
    );

    const { findByText } = render(component);
    const title = await findByText("Frozen Mint Daiquiri");

    expect(title).toBeTruthy();
  });
  test("component contains instructions button", async () => {
    const component = (
      <DrinkCardComponent
        image={drinkState.image}
        drinkName={drinkState.drinkName}
        ingredients={drinkState.ingredients}
        instructions={drinkState.instructions}
        glass={drinkState.glass}
        getDrink={getRandomDrink}
        theme={theme}
      />
    );

    const { findByText } = render(component);
    const instructionsButton = await findByText("Instructions");

    expect(instructionsButton).toBeTruthy();
  });

  test("component contains ingredients button", async () => {
    const component = (
      <DrinkCardComponent
        image={drinkState.image}
        drinkName={drinkState.drinkName}
        ingredients={drinkState.ingredients}
        instructions={drinkState.instructions}
        glass={drinkState.glass}
        getDrink={getRandomDrink}
        theme={theme}
      />
    );

    const { findByText } = render(component);
    const ingredientsButton = await findByText("Ingredients");

    expect(ingredientsButton).toBeTruthy();
  });

  test("pressing instructions button opens modal", async () => {
    const component = (
      <DrinkCardComponent
        image={drinkState.image}
        drinkName={drinkState.drinkName}
        ingredients={drinkState.ingredients}
        instructions={drinkState.instructions}
        glass={drinkState.glass}
        getDrink={getRandomDrink}
        theme={theme}
      />
    );

    const { findByText } = render(component);
    const toClick = await findByText("Instructions");

    fireEvent(toClick, "press");
    const instructions = await findByText(
      "Combine all ingredients with 1 cup of crushed ice"
    );

    expect(instructions).toBeTruthy();
  });

  test("pressing ingredients button opens list", async () => {
    const component = (
      <DrinkCardComponent
        image={drinkState.image}
        drinkName={drinkState.drinkName}
        ingredients={drinkState.ingredients}
        instructions={drinkState.instructions}
        glass={drinkState.glass}
        getDrink={getRandomDrink}
        theme={theme}
      />
    );

    const { findAllByText, findByText } = render(component);
    const toClick = await findByText("Ingredients");

    fireEvent(toClick, "press");
    const ingredients = await findAllByText("Light rum");

    expect(ingredients.length).toBe(4);
  });
});
