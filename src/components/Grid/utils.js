import theme from "../../config/theme";
import { css } from "styled-components";

export const respondTo = Object.keys(theme.breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${theme.breakpoints[label]}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);

export const percentage = (breakpoint) => {
  return `${(breakpoint / 12) * 100}%`;
};
