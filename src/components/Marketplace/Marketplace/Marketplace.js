import React from "react";
import { Container, EmptyState } from "./Marketplace.module";

export const Marketplace = () => {
  return (
    <Container>
      <EmptyState>
        <p>
          There are no apps published to the marketplace.
        </p>
      </EmptyState>
    </Container>
  );
};
