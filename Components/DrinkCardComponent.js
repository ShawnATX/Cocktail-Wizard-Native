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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: "center",
      justifyContent: "flex-start",
    },
    header: {
      textAlign: "center",
      justifyContent: "center",
      backgroundColor: colors.background,
      flex: 1,
      paddingTop: Platform.OS === "android" ? 0 : 6,
    },
    heading: {
      textAlign: "center",
      justifyContent: "center",
      color: colors.text,
      fontWeight: "bold",
      fontSize: 42,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
      paddingBottom: 5,
    },
    imageContainer: {
      flex: 2,
      color: colors.surface,
    },
    instructions: {
      padding: 20,
      fontSize: 24,
      color: colors.text,
      backgroundColor: colors.surface,
    },
    buttonContainer: {
      flex: 1,
      alignItems: "stretch",
      justifyContent: "space-around",
    },
    button: {
      paddingTop: 4,
      color: colors.accent,
    },
    buttonInner: {
      flexDirection: "row-reverse",
      width: "100%",
      margin: 8,
      fontSize: 34,
      color: colors.surface,
    },
    ingredientList: {
      backgroundColor: "#0A2933",
      position: "absolute",
      bottom: 0,
      width: "100%",
      justifyContent: "center",
      alignContent: "center",
      color: colors.text,
    },
    listItem: {
      marginBottom: 0,
      marginTop: 0,
      paddingTop: 1,
      paddingBottom: 0,
      backgroundColor: "#0D3644",
    },
    listTitle: {
      alignContent: "center",
      color: colors.text,
    },
    listText: {
      alignContent: "center",
      color: colors.accent,
    },
    footer: {
      flexDirection: "column-reverse",
    },
  });

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
              <DrinkImage
                image={{ image }}
                colors={{ colors }}
                getDrink={getDrink}
              />
            </View>
          </FlingGestureHandler>
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
