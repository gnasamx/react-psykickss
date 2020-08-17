import React from "react";
import * as Styled from "./styles";

export default function Button(props) {
  return (
    <Styled.Button {...props}>
      {props.children}
      {props.icon}
    </Styled.Button>
  );
}
