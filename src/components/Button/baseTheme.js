import { decideTheme } from "./utils";
import { gray } from "../../config/colors";

const primary = decideTheme();

export const applyPropertyStyle = (property, appearance, state = "default") => {
  const propertyStyle = baseTheme[property];
  const appearanceStyle = propertyStyle[appearance];
  return appearanceStyle[state];
};

export const baseTheme = {
  background: {
    primary: {
      default: primary["60"],
      hover: primary["70"],
    },
    secondary: {
      default: gray["00"],
      hover: gray["05"],
    },
    outline: {
      default: gray["00"],
      hover: primary["00"],
    },
  },
  border: {
    primary: {
      default: primary["60"],
      hover: primary["70"],
    },
    secondary: {
      default: gray["40"],
      hover: gray["50"],
    },
    outline: {
      default: primary["70"],
      hover: primary["80"],
    },
  },
  color: {
    primary: {
      default: gray["00"],
      hover: gray["00"],
    },
    secondary: {
      default: gray["90"],
      hover: gray["90"],
    },
    outline: {
      default: primary["70"],
      hover: primary["70"],
    },
  },
  boxShadow: {
    primary: {
      active: `${gray["00"]} 0px 0px 0px 2px, ${primary["20"]} 0px 0px 0px 4px`,
    },
    secondary: {
      active: `${gray["00"]} 0px 0px 0px 2px, ${gray["40"]} 0px 0px 0px 4px`,
    },
    outline: {
      active: `${gray["00"]} 0px 0px 0px 2px, ${primary["20"]} 0px 0px 0px 4px`,
    },
  },
};
