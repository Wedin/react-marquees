import React from "react";
import PropTypes from "prop-types";
import RafWrapper from "./RAFWrapper";

class Marquee extends React.Component {
  constructor(props) {
    super(props);
    this.animationElem = React.createRef();
    this.animationLoop = this.animationLoop.bind(this);
    this.progress = 0;
    this.boundingRect = {};
  }

  componentDidMount() {
    this.boundingRect = this.animationElem.current.getBoundingClientRect();
  }

  animationLoop() {
    const max = this.boundingRect.width + this.boundingRect.x;
    // TODO setup speed
    const delta = 2;
    let progress = this.progress + delta;
    if (progress > max) {
      progress = -this.boundingRect.width;
    }

    this.progress = progress;

    // Most browsers >98% support webkitTransform and transform
    const translateValue = `translate3d(${progress}px, 0, 0)`;
    this.animationElem.current.style.transform = translateValue;
    this.animationElem.current.style.webkitTransform = translateValue;
  }
  render() {
    const WithForwardedRef = React.forwardRef((props, forwardedRef) => (
      <div
        style={{
          overflowX: "hidden",
        }}
        ref={forwardedRef}
      >
        <RafWrapper ref={forwardedRef} onRaf={this.animationLoop}>
          {this.props.children}
        </RafWrapper>
      </div>
    ));

    return <WithForwardedRef ref={this.animationElem}>{this.props.children}</WithForwardedRef>;
  }
}

Marquee.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Marquee.defaultProps = {
  children: null,
};

export default Marquee;
