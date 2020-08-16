import { applyPropertyStyle } from "./baseTheme";
import { decideAppearance } from "./utils";

export function getPadding({ small, large }) {
  if (small) {
    return "0.375rem 0.75rem";
  } else if (large) {
    return "0.625rem 1rem";
  } else {
    return "0.625rem 1rem";
  }
}

export function getFontSize({ small, large }) {
  if (small) {
    return "0.9375rem";
  } else if (large) {
    return "1rem";
  } else {
    return "1rem";
  }
}

export function getBackgroundColor({ primary, secondary, outline, state }) {
  const appearance = decideAppearance(primary, secondary, outline);
  return applyPropertyStyle("background", appearance, state);
}

export function getBorderColor({ primary, secondary, outline, state }) {
  const appearance = decideAppearance(primary, secondary, outline);
  return applyPropertyStyle("border", appearance, state);
}

export function getColor({ primary, secondary, outline, state }) {
  const appearance = decideAppearance(primary, secondary, outline);
  return applyPropertyStyle("color", appearance, state);
}

export function getWidth({ block }) {
  if (block) {
    return "100%";
  } else {
    return "auto";
  }
}

export function getBoxShadow({ primary, secondary, outline, state }) {
  const appearance = decideAppearance(primary, secondary, outline);
  return applyPropertyStyle("boxShadow", appearance, state);
}
