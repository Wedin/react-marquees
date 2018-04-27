/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import "./stories.css";

import Marquee from "../../src/marquee";
import ExampleWrapper from "./exampleWrapper";
import ExampleParagraph from "./exampleParagraph";

storiesOf("Marquee", module).add(
  "with speed",
  withInfo(`
  Sets the arbitrary speed

  If no value is specified, the default value is 2.
`)(() => (
  <React.Fragment>
    <ExampleWrapper>
      <Marquee speed={1}>
        <ExampleParagraph background="Snow" text="Slow scroll" />
      </Marquee>
    </ExampleWrapper>

    <ExampleWrapper>
      <Marquee speed={5}>
        <ExampleParagraph background="AliceBlue" text="This text will scroll veeeeeeeeeeeeeeeeeeeeeeeeeeeeeeery fast" />
      </Marquee>
    </ExampleWrapper>
  </React.Fragment>
  ))
);
