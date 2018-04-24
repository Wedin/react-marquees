import React from "react";
import PropTypes from "prop-types";

function ExampleParagraph(props) {
  return (
    <p
      style={{
        background: props.background,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100px",
        margin: "0px",
      }}
    >
      {props.text}
    </p>
  );
}

ExampleParagraph.propTypes = {
  background: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ExampleParagraph;
