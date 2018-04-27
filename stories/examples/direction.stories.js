/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import "./stories.css";

import Marquee from "../../src/marquee";
import ExampleWrapper from "./exampleWrapper";
import ExampleParagraph from "./exampleParagraph";

storiesOf("Marquee", module).add(
  "with direction",
  withInfo(`
  Sets the direction of the scrolling within the marquee.
  Possible values are LEFT, RIGHT, UP and DOWN.

  If no value is specified, the default value is LEFT.
`)(() => (
  <React.Fragment>
    <ExampleWrapper>
      <Marquee direction="LEFT">
        <ExampleParagraph text="This text will scroll from left to right" />
      </Marquee>
    </ExampleWrapper>

    <ExampleWrapper>
      <Marquee direction="RIGHT">
        <ExampleParagraph background="AliceBlue" text="This text will scroll from right to left" />
      </Marquee>
    </ExampleWrapper>

    <ExampleWrapper>
      <Marquee direction="UP">
        <ExampleParagraph background="PaleVioletRed" text="This text will scroll from bottom to top" />
      </Marquee>
    </ExampleWrapper>

    <ExampleWrapper>
      <Marquee direction="DOWN">
        <ExampleParagraph background="PeachPuff" text="This text will scroll from top to bottom" />
      </Marquee>
    </ExampleWrapper>
  </React.Fragment>
  ))
);
