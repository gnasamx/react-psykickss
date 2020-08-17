import React from "react";
import * as Styled from "./styles";
import Spinner from "../Spinner";

export default function Button({ children, icon, isLoading, ...props }) {
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
