import React, { useState } from "react";
import {
  Alert,
  Platform,
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";
import {
  List,
  Paragraph,
  Title,
  Modal,
  Portal,
  Button,
  Provider,
} from "react-native-paper";
import {
  FlingGestureHandler,
  Directions,
  State,
} from "react-native-gesture-handler";
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
        style={styles.listItem}
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
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Title style={styles.heading}>{drinkName}</Title>
        </View>
        <FlingGestureHandler
          direction={Directions.RIGHT | Directions.LEFT}
          numberOfPointers={1}
          onHandlerStateChange={({ nativeEvent }) => {
            if (nativeEvent.state === State.ACTIVE) {
              getDrink();
            }
          }}
        >
          <View style={styles.imageContainer}>
            <DrinkImage image={{ image }} getDrink={getDrink} />
          </View>
        </FlingGestureHandler>
        <View style={styles.buttonContainer}>
          <Button
            icon="comment-text"
            mode="outlined"
            onPress={showModal}
            style={styles.button}
            contentStyle={styles.buttonInner}
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
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    textAlign: "center",
    justifyContent: "center",
    flex: 1,
    paddingTop: Platform.OS === "android" ? 0 : 6,
  },
  heading: {
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 42,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
    paddingBottom: 5,
  },
  imageContainer: {
    flex: 2,
  },
  instructions: {
    padding: 20,
    fontSize: 24,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "space-around",
  },
  button: {
    paddingTop: 4,
  },
  buttonInner: {
    width: "100%",
    margin: 8,
    fontSize: 34,
  },
  ingredientList: {
    position: "absolute",
    bottom: 0,
    width: "85%",
    right: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  listItem: {
    marginBottom: 0,
    marginTop: 0,
    paddingTop: 1,
    paddingBottom: 0,
  },
  listTitle: {
    alignContent: "center",
  },
  footer: {
    flexDirection: "column-reverse",
  },
});

export default DrinkCard;
