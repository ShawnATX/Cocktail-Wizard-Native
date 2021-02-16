import { Platform, StatusBar, StyleSheet, Dimensions } from "react-native";

import Theme from "../Styles/Theme";

// const DIMENSIONS = Dimensions.get("window");
const { colors } = Theme.CustomDarkTheme;

const Styles = StyleSheet.create({
  card: {
    height: 350,
    width: 350,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 8,
    justifyContent: "center",
    backgroundColor: "#FFF",
    overflow: "hidden",
  },
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

export default Styles;
