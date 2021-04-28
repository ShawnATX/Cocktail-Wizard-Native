import React, { useState } from "react";
import { View } from "react-native";
import {
  List,
  Paragraph,
  Title,
  Modal,
  Portal,
  Button,
  Provider,
} from "react-native-paper";
import Styles from "../Styles/Styles";
import DrinkImage from "./DrinkImageComponent";

const DrinkCard = (props) => {
  const { drinkName, id, ingredients, instructions, image, glass } = props;

  const { getDrink } = props;

  const [expanded, setExpanded] = useState(false);
  const handlePress = () => setExpanded(!expanded);

  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  function getIngredientList() {
    const ingredientList = ingredients.map((ingredient, i) => (
      <List.Item
        key={i}
        title={ingredient.ingredient}
        description={ingredient.measurement}
        style={Styles.listItem}
        titleStyle={Styles.listTitle}
        descriptionStyle={Styles.listText}
      />
    ));
    return ingredientList;
  }

  return (
    <Provider>
      <Portal>
        <Modal
          visible={modalVisible}
          onDismiss={hideModal}
          contentContainerStyle={Styles.instructions}
        >
          <Paragraph style={Styles.instructions}>{instructions}</Paragraph>
        </Modal>
      </Portal>
      <View style={Styles.container}>
        <View>
          <View style={Styles.header}>
            <Title style={Styles.heading} numberOfLines={2}>
              {drinkName}
            </Title>
          </View>
          <View style={Styles.imageContainer}>
            <DrinkImage image={{ image }} getDrink={getDrink} />
          </View>
          <View style={Styles.buttonContainer}>
            <Button
              raised
              icon="comment-text"
              mode="text"
              onPress={showModal}
              style={Styles.button}
              labelStyle={Styles.button}
              contentStyle={Styles.buttonInner}
            >
              Instructions
            </Button>
          </View>
        </View>
        <List.Section style={Styles.ingredientList}>
          <List.Accordion
            title="Ingredients"
            titleStyle={Styles.listTitle}
            expanded={expanded}
            onPress={handlePress}
          >
            {getIngredientList()}
          </List.Accordion>
        </List.Section>
      </View>
    </Provider>
  );
};

export default DrinkCard;
