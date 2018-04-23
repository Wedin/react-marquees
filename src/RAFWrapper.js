import React from "react";
import PropTypes from "prop-types";

class RafWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.loop = this.loop.bind(this);
  }
  componentDidMount() {
    this.startRAF();
  }

  componentWillUnmount() {
    this.stopRAF();
  }

  startRAF() {
    if (!this.rafId) {
      this.rafId = window.requestAnimationFrame(this.loop);
    }
  }

  stopRAF() {
    window.cancelAnimationFrame(this.rafId);
  }

  loop() {
    this.props.onRaf();
    this.rafId = window.requestAnimationFrame(this.loop);
  }

  render() {
    return <React.Fragment> {this.props.children}</React.Fragment>;
  }
}

RafWrapper.propTypes = {
  onRaf: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

RafWrapper.defaultProps = {
  onRaf: () => {},
  children: null,
};

export default RafWrapper;
