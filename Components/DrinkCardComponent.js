import React, { useState } from "react";
import { Alert, Platform, View, SafeAreaView } from "react-native";
import {
  List,
  Paragraph,
  Title,
  Modal,
  Portal,
  Button,
  Provider,
} from "react-native-paper";
import DrinkImage from "./DrinkImageComponent";
import Styles from "./Styles";

const DrinkCard = (props) => {
  const {
    drinkName,
    id,
    ingredients,
    instructions,
    image,
    glass,
    theme,
  } = props;

  const { colors } = theme;

  const { getDrink } = props;

  const [expanded, setExpanded] = useState(false);
  const handlePress = () => setExpanded(!expanded);

  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const styles = Styles;

  function getIngredientList() {
    const ingredientList = ingredients.map((ingredient, i) => (
      <List.Item
        key={i}
        title={ingredient.ingredient}
        description={ingredient.measurement}
        style={styles.listItem}
        titleStyle={styles.listTitle}
        descriptionStyle={styles.listText}
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
          contentContainerStyle={styles.instructions}
        >
          <Paragraph style={styles.instructions}>{instructions}</Paragraph>
        </Modal>
      </Portal>
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.header}>
            <Title style={styles.heading}>{drinkName}</Title>
          </View>
          <View style={styles.imageContainer}>
            <DrinkImage
              image={{ image }}
              colors={{ colors }}
              getDrink={getDrink}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              raised
              icon="comment-text"
              mode="text"
              onPress={showModal}
              style={styles.button}
              labelStyle={styles.button}
              contentStyle={styles.buttonInner}
              color={colors.accent}
            >
              Instructions
            </Button>
          </View>
        </SafeAreaView>
        <List.Section style={styles.ingredientList}>
          <List.Accordion
            title="Ingredients"
            titleStyle={styles.listTitle}
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
