import React from "react";
import * as Styled from "./styles";

export default function Button({ children, ...props }) {
  return <Styled.Button {...props}>{children}</Styled.Button>;
}
