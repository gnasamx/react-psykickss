import styled from "styled-components";
import {
  getPadding,
  getFontSize,
  getBackgroundColor,
  getBorderColor,
  getColor,
  getWidth,
  getBoxShadow,
  getIconPosition,
} from "./getStyles";

export const Button = styled.button`
  font-weight: 700;
  border-radius: 2rem;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => getIconPosition(props)};
  line-height: 1.2;
  color: ${(props) => getColor(props)};
  padding: ${(props) => getPadding(props)};
  font-size: ${(props) => getFontSize(props)};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => getBorderColor(props)};
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-property: box-shadow;
  opacity: 1;
  background-color: ${(props) => getBackgroundColor(props)};
  outline: none;
  width: ${(props) => getWidth(props)};

  &:hover {
    color: ${(props) => getColor({ state: "hover", ...props })};
    border-color: ${(props) => getBorderColor({ state: "hover", ...props })};
    background-color: ${(props) =>
      getBackgroundColor({ state: "hover", ...props })};
  }

  &:active {
    box-shadow: ${(props) => getBoxShadow({ state: "active", ...props })};
  }
`;

export const Space = styled.div`
  height: 1px;
  width: 0.5rem;
`;
