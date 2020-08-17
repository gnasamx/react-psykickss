// @flow
import styled from "styled-components";
import { IconPosition } from "./constants";

const getFludity = ({ fluid }) => {
  return fluid ? "100%" : "auto";
};

const getIconPosition = ({ iconPosition }) => {
  return iconPosition === IconPosition.Left ? "row-reverse" : "row";
};

export const Button = styled.button((props) => ({
  fontWeight: 600,
  borderRadius: "3rem",
  display: "flex",
  cursor: "pointer",
  justifyContent: "center",
  alignItems: "center",
  lineHeight: 1.2,
  borderWidth: "1px",
  borderStyle: "solid",
  transitionDuration: "0.2s",
  transitionTimingFunction: "ease-in-out",
  transitionProperty: "box-shadow",
  opacity: 1,
  color: "#ffffff",
  backgroundColor: "#7b20f9",
  borderColor: "#7b20f9",
  outline: "none",
  width: getFludity(props),
  flexDirection: getIconPosition(props),
  padding: "0.625rem 1rem",
  fontSize: "1rem",
}));
