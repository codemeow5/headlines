import React from "react";
import { Clock } from "../../Clock/Clock";
import { AppList } from "../../Apps/";
import { Search } from "../../Search/";
import { ShortcutList } from "../../Shortcuts/";
import { Container } from "./Content.styles";

export const Content = () => {
  return (
    <Container>
      <Clock />

      <Search />

      <AppList />

      <ShortcutList />
    </Container>
  );
};
