import React from "react";
import { Svg } from "./styles.js";

export default function Icon(props) {
  const { children, title, ...restProps } = props;
  return (
    <Svg {...restProps}>
      {title ? <title>{title}</title> : null}
      {children}
    </Svg>
  );
}
