import React from "react";
import PropTypes from "prop-types";

function ExampleWrapper(props) {
  return (
    <div
      style={{
        border: "1px solid tomato",
        marginBottom: "15px",
      }}
    >
      {props.children}
    </div>
  );
}

ExampleWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

ExampleWrapper.defaultProps = {
  children: null,
};

export default ExampleWrapper;
