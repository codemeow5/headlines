import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateOpenIn,
  appsSelector,
} from "../../../store/slices/apps";
import { Dropdown } from "../../Common";
import { Label, Header, Container } from "./Apps.module";

const appsOptions = [
  { value: "same-tab", label: "Same tab" },
  { value: "new-tab", label: "New tab" },
  { value: "new-tab-background", label: "New tab (background)" },
];

export const Apps = () => {
  const dispatch = useDispatch();
  const { showApps, openIn } = useSelector(appsSelector);

  return (
    <Container disabled={!showApps}>
      <Header>
        <Label htmlfor="apps">Apps</Label>
        <p>Display apps on the new tab page.</p>
      </Header>
      <Dropdown
        defaultValue={openIn}
        options={appsOptions}
        placeholder="Select search engine"
        onChange={(option) => dispatch(updateOpenIn(option))}
        autoFocus
      />
    </Container>
  );
};
