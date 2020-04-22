import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleShowClock,
  clockSelector,
  updateTimeFormat,
} from "../../../store/slices/clock";
import { Toggle, Radio, RadioGroup } from "../../Common/";
import { Label, Header, Container } from "./Clock.module";

export const Clock = () => {
  const dispatch = useDispatch();
  const { showClock, timeFormat } = useSelector(clockSelector);

  return (
    <Container disabled={!showClock}>
      <Header>
        <Label htmlfor="clock">Clock</Label>
        <Toggle
          name="clock"
          id="clock"
          checked={showClock}
          onChange={() => dispatch(toggleShowClock())}
        />
        <p>Display a clock on the new tab page.</p>
      </Header>
      <RadioGroup title="Choose an hour format">
        <Radio
          label="12-hour"
          id="12-hour"
          name="hour-format"
          value="12-hour"
          checked={timeFormat === "12"}
          onChange={() => dispatch(updateTimeFormat("12"))}
        />
        <Radio
          label="24-hour"
          id="24-hour"
          name="hour-format"
          value="24-hour"
          checked={timeFormat === "24"}
          onChange={() => dispatch(updateTimeFormat("24"))}
        />
      </RadioGroup>
    </Container>
  );
};
