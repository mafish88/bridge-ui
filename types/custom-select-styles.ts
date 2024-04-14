import { StylesConfig } from "react-select";

const lightColors = {
  inputBackground: "#ffffff",
  inputTextColor: "#000000",
  dropdownBackground: "#ffffff",
  optionColor: "#000000",
  selectedOptionBackground: "rgb(255, 252, 252, 0.9)",
  onSelectedOptionBackground: "rgb(255, 252, 252, 0.9)",
  borderColor: "#e3e3e3",
  selectedOptionColor: "#000000",
  hoverOptionBackground: "#e3e3e3",
  focusBorderColor: "#d1d1d1",
};

const darkColors = {
  inputBackground: "#1e2329",
  inputTextColor: "#f7f7f7",
  dropdownBackground: "#1e2329",
  optionColor: "#f7f7f7",
  selectedOptionBackground: "rgb(28, 32, 38, 0.9)",
  onSelectedOptionBackground: "rgb(22, 25, 30, 0.9)",
  borderColor: "#9c9c9c",
  selectedOptionColor: "#f2fbf9",
  hoverOptionBackground: "#272e36",
  focusBorderColor: "#666666",
};

const getBaseCustomSelectStyles = (
  theme: "light" | "dark"
): StylesConfig<any, true> => {
  const colors = theme === "light" ? lightColors : darkColors;
  return {
    control: (styles, { isFocused }) => ({
      ...styles,
      backgroundColor: colors.inputBackground,
      color: colors.inputTextColor,
      borderColor: isFocused ? colors.focusBorderColor : colors.borderColor,
      boxShadow: isFocused ? `0 0 0 1px ${colors.focusBorderColor}` : "none",
      "&:hover": {
        borderColor: isFocused ? colors.focusBorderColor : colors.borderColor,
      },
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      backgroundColor: isSelected
        ? colors.selectedOptionBackground
        : isFocused
        ? colors.hoverOptionBackground
        : colors.dropdownBackground,
      color: isSelected ? colors.selectedOptionColor : colors.optionColor,
      cursor: "pointer",
      ":active": {
        ...styles[":active"],
        backgroundColor: colors.onSelectedOptionBackground,
        color: colors.selectedOptionColor,
      },
    }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: colors.dropdownBackground,
    }),
    clearIndicator: (styles, { isFocused }) => ({
      ...styles,
      color: isFocused ? "hoverColor" : "defaultColor",
      ":hover": {
        color: "hoverColor",
      },
      ":active": {
        color: "hoverColor",
      },
    }),
    dropdownIndicator: (styles, { isFocused }) => ({
      ...styles,
      color: isFocused ? "hoverColor" : "defaultColor",
      ":hover": {
        color: "hoverColor",
      },
      ":active": {
        color: "hoverColor",
      },
    }),
    input: (styles) => ({
      ...styles,
      color: colors.inputTextColor,
      padding: "0.5rem",
    }),
  };
};

export const getMultiSelectStyles = (
  theme: "light" | "dark" = "light"
): StylesConfig<any, true> => {
  const colors = theme === "light" ? lightColors : darkColors;
  return {
    ...getBaseCustomSelectStyles(theme),
    multiValue: (styles) => ({
      ...styles,
      backgroundColor: colors.selectedOptionBackground,
      color: colors.selectedOptionColor,
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      color: colors.selectedOptionColor,
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      color: colors.selectedOptionColor,
      ":hover": {
        backgroundColor: colors.borderColor,
        color: colors.inputTextColor,
      },
    }),
  };
};

export const getSingleSelectStyles = (
  theme: "light" | "dark" = "light"
): StylesConfig<any, true> => {
  const colors = theme === "light" ? lightColors : darkColors;
  return {
    ...getBaseCustomSelectStyles(theme),
    singleValue: (styles) => ({
      ...styles,
      color: colors.selectedOptionColor,
    }),
  };
};
