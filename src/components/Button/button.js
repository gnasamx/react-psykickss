import React from "react";
import * as Styled from "./styled-button";

export default function Button({ children, ...props }) {
  return <Styled.Button {...props}>{children}</Styled.Button>;
}
