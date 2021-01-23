import React, { useState } from "react";
import {
  Alert,
  Image,
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
  Surface,
  Modal,
  Text,
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
          <View>
            <DrinkImage image={{ image }} getDrink={getDrink} />
          </View>
        </FlingGestureHandler>
        <Button
          icon="comment-text"
          mode="outlined"
          onPress={showModal}
          style={styles.button}
          contentStyle={styles.buttonInner}
        >
          Instructions
        </Button>
      </SafeAreaView>
      <List.Section style={styles.ingredientList}>
        <List.Accordion
          title="Ingredients"
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 0 : 6,
  },
  heading: {
    textAlign: "center",
    justifyContent: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 40,
    textShadowColor: "grey",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
    paddingBottom: 5,
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
    elevation: 6,
  },
  instructions: {
    padding: 20,
    fontSize: 24,
    color: "black",
    backgroundColor: "white",
  },
  ingredientList: {
    backgroundColor: "#fff",
  },
  footer: {
    flex: 1,
    flexDirection: "column-reverse",
  },
  button: {
    paddingTop: 4,
    justifyContent: "flex-end",
  },
  buttonInner: {
    width: "100%",
    margin: 8,
    fontSize: 34,
  },
});

export default DrinkCard;
