import React from "react";
import * as Styled from "./styles";
import Spinner from "../Spinner";
import { getColor } from "./getStyles";

export default function Button({ children, icon, isLoading, ...props }) {
  const iconColor = getColor(props);
  return (
    <Styled.Button {...props}>
      {isLoading && <Spinner />}
      {!isLoading && (
        <>
          {children}
          <Styled.Space />
          {icon}
        </>
      )}
    </Styled.Button>
  );
}
