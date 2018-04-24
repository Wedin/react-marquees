/* eslint-disable import/no-extraneous-dependencies */

import { configure } from "@storybook/react";

const req = require.context("./examples", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
