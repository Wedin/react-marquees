/* eslint-disable react/no-multi-comp */
import React from "react";

class Marquee extends React.Component {
  constructor(props) {
    super(props);
    this.animationElem = React.createRef();
    this.startAnimation = this.startAnimation.bind(this);
    this.animationLoop = this.animationLoop.bind(this);

    this.start = 0;
    this.progress = 0;
    this.boundingRect = {};
  }
  componentDidMount() {
    this.boundingRect = this.animationElem.current.getBoundingClientRect();
    this.startAnimation();
  }

  componentWillUnmount() {
    this.stopAnimation();
  }

  startAnimation() {
    if (!this.rafId) {
      this.rafId = window.requestAnimationFrame(this.animationLoop);
    }
  }

  animationLoop(timestamp) {
    const max = this.boundingRect.width + this.boundingRect.x;
    // TODO setup speed
    const delta = 2;
    let progress = this.progress + delta;
    if (progress > max) {
      progress = -this.boundingRect.width;
    }

    this.progress = progress;

    // TODO prefix
    this.animationElem.current.style.transform = `translate3d(${progress}px, 0, 0)`;
    this.rafId = window.requestAnimationFrame(this.animationLoop);
  }

  stopAnimation() {
    window.cancelAnimationFrame(this.rafId);
  }

  render() {
    // TODO break out
    const RefRafWrapper = React.forwardRef((props, ref) => (
      <div
        style={{
          overflowX: "hidden",
        }}
        ref={ref}
      >
        {props.children}
      </div>
    ));

    return <RefRafWrapper ref={this.animationElem}>{this.props.children}</RefRafWrapper>;
  }
}

export default Marquee;
