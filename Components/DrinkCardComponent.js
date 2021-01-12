import React from "react";
import { Text, ImageBackground, StyleSheet } from "react-native";
// import DrinkVideo from "./drinkVideo";

const DrinkCard = (props) => {
  const { drinkName, id, ingredients, instructions, image } = props;

  function getIngredientList() {
    const ingredientList = ingredients.map((ingredient) => (
      <li key={ingredient[0]}>
        {ingredient[0]} - {ingredient[1]}
      </li>
    ));
    return ingredientList;
  }

  return (
    <ImageBackground
      source={{ uri: image }}
      style={{ width: "100%", height: "100%" }}
    >
      <Text style={styles.heading}> {drinkName} </Text>
    </ImageBackground>
    // <div className="row card-row">
    //   <div className="col s12 m12 l12 card-col">
    //     <div className="card">
    //       <div className="card-image waves-effect waves-light">
    //         <img className="responsive-img" src={image} alt={drinkName} />
    //         <h1 className="card-title">{drinkName}</h1>
    //         <button
    //           href=""
    //           className="btn-large btn-floating halfway-fab waves-effect waves-light red"
    //         >
    //           <i className="large material-icons activator">video_library</i>
    //         </button>
    //       </div>
    //       <div className="card-content">
    //         {getIngredientList()}
    //         <p className="flow-text">{instructions}</p>
    //       </div>
    //       <div className="card-reveal">
    //         <span className="card-title grey-text text-darken-4">
    //           {drinkName}
    //           <i className="material-icons large right">close</i>
    //         </span>
    //         {drinkName ? <DrinkVideo name={drinkName} /> : <div></div>}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    flex: 1,
  },
});

export default DrinkCard;
