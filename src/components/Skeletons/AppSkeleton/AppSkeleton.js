import React from "react";
import {
  Container,
  Title,
  Overflow,
  AppImage,
} from "./AppSkeleton.module";

export const AppSkeleton = () => (
  <Container>
    <AppImage />
    <Overflow>
      <Title>
        <div />
        <div />
        <div />
      </Title>
    </Overflow>
  </Container>
);
