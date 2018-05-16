import React from "react";
import TestRenderer from "react-test-renderer";

import Marquee from "../../src/";

function createNodeMock(element) {
  if (element.type === "div") {
    return {
      parentNode: {
        getBoundingClientRect: () => ({
          bottom: 0,
          height: 200,
          left: 0,
          right: 0,
          top: 0,
          width: 200,
          x: 50,
          y: 25,
        }),
      },
    };
  }
  return null;
}

it("should render", () => {
  const options = { createNodeMock };

  const result = TestRenderer.create(
    <Marquee direction="left">
      <p>OK</p>
    </Marquee>,
    options
  ).toJSON();
  expect(result).toMatchSnapshot();
});
