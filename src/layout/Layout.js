import React from "react";
import { Container, MainContainer } from "./LayoutStyles";
import Header from "./../components/Header/Header";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <MainContainer>{children}</MainContainer>
    </Container>
  );
};
