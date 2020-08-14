import React from "react";
import { Container, GridWrapper } from "./styles";

export default ({ children }) => (
  <Container>
    <GridWrapper>{children}</GridWrapper>
  </Container>
);
