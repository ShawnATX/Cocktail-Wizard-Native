const CustomTheme = {
  dark: false,
  mode: "adaptive",
  roundness: 1,
  colors: {
    primary: "#EEE5E5",
    accent: "#19647E",
    background: "#37392E",
    surface: "#19647E",
    onSurface: "#19647E",
    text: "blue",
    disabled: "rgba(0, 0, 0, 0.26)",
    placeholder: "rgba(0, 0, 0, 0.54)",
    backdrop: "rgba(0, 0, 0, 0.5)",
    notification: "#f50057",
  },
  fonts: {
    regular: "",
    medium: "",
    light: "",
    thin: "",
  },
};

// dark (boolean): whether this is a dark theme or light theme.
// mode ('adaptive' | 'exact'): color mode for dark theme (See Dark Theme).
// roundness (number): roundness of common elements, such as buttons.
// colors (object): various colors used throughout different elements.
// primary - primary color for your app, usually your brand color.
// accent - secondary color for your app which complements the primary color.
// background - background color for pages, such as lists.
// surface - background color for elements containing content, such as cards.
// text - text color for content.
// disabled - color for disabled elements.
// placeholder - color for placeholder text, such as input placeholder.
// backdrop - color for backdrops of various components such as modals.
// fonts (object): various fonts used throughout different elements.
// regular
// medium
// light
// thin
// animation (object)
// scale - scale for all animations

export default CustomTheme;
