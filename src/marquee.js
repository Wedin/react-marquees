import React from "react";
import PropTypes from "prop-types";
import RafWrapper from "./RAFWrapper";
import { DIRECTION_LEFT, DIRECTION_RIGHT, DIRECTION_UP, DIRECTION_DOWN } from "./constants";
import { getAnimationModifier, getProgressModifier } from "./modifiers";

class Marquee extends React.Component {
  constructor(props) {
    super(props);
    this.animationElem = React.createRef();
    this.animationLoop = this.animationLoop.bind(this);
    this.animationModifier = getAnimationModifier(this.props.direction);
    this.progressModifier = getProgressModifier(this.props.direction);
    this.progress = 0;
    this.boundingRect = {};
  }

  componentDidMount() {
    // Get bounding of overflow elem, not animation element
    this.boundingRect = this.animationElem.current.parentNode.getBoundingClientRect();
  }

  animationLoop() {
    this.progress = this.progressModifier(this.progress, this.boundingRect, this.props.speed);

    const translateValue = this.animationModifier(this.progress);
    // Most browsers (>98%) support webkitTransform and transform
    this.animationElem.current.style.transform = translateValue;
    this.animationElem.current.style.webkitTransform = translateValue;
  }
  render() {
    const WithForwardedRef = React.forwardRef((props, forwardedRef) => (
      <div ref={forwardedRef}>
        <RafWrapper onRaf={this.animationLoop} passedRef={forwardedRef}>
          {this.props.children}
        </RafWrapper>
      </div>
    ));

    return (
      <div
        style={{
          overflow: "hidden",
        }}
      >
        <WithForwardedRef ref={this.animationElem}>{this.props.children}</WithForwardedRef>
      </div>
    );
  }
}

Marquee.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  direction: PropTypes.oneOf([DIRECTION_LEFT, DIRECTION_RIGHT, DIRECTION_UP, DIRECTION_DOWN]),
  speed: PropTypes.number,
};

Marquee.defaultProps = {
  children: null,
  direction: DIRECTION_LEFT,
  speed: 2,
};

export default Marquee;
