/* eslint-disable import/no-extraneous-dependencies */
import React from "react";

import { storiesOf } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";
import Marquee from "../src/marquee";

storiesOf("Welcome", module).add("to Storybook", () => <Welcome showApp={linkTo("Marquee")} />);

storiesOf("Marquee", module).add("with text", () => <Marquee />);
