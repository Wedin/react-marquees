import { DIRECTION_LEFT, DIRECTION_RIGHT, DIRECTION_UP, DIRECTION_DOWN } from "./constants";

const directionLeft = (prevProgress, boundingRect, speed) => {
  const maxBounds = boundingRect.width + boundingRect.x;
  let progress = prevProgress + speed;
  if (progress > maxBounds) {
    progress = -boundingRect.width;
  }
  return progress;
};

const directionRight = (prevProgress, boundingRect, speed) => {
  const minBounds = -boundingRect.width;
  let progress = prevProgress - speed;
  if (progress < minBounds) {
    progress = boundingRect.width;
  }
  return progress;
};

const directionUp = (prevProgress, boundingRect, speed) => {
  const maxBounds = -boundingRect.height;
  let progress = prevProgress - speed;
  if (progress < maxBounds) {
    progress = boundingRect.height;
  }
  return progress;
};

const directionDown = (prevProgress, boundingRect, speed) => {
  const minBounds = boundingRect.height;
  let progress = prevProgress + speed;
  if (progress > minBounds) {
    progress = -boundingRect.height;
  }
  return progress;
};

function getAnimationModifier(direction) {
  const dir = direction.toUpperCase();
  switch (dir) {
    case DIRECTION_LEFT:
    case DIRECTION_RIGHT:
      return progress => `translate3d(${progress}px, 0, 0)`;
    case DIRECTION_UP:
    case DIRECTION_DOWN:
      return progress => `translate3d(0, ${progress}px, 0)`;
    default:
      return () => {};
  }
}

function getProgressModifier(direction) {
  const dir = direction.toUpperCase();
  switch (dir) {
    case DIRECTION_LEFT:
      return directionLeft;
    case DIRECTION_RIGHT:
      return directionRight;
    case DIRECTION_UP:
      return directionUp;
    case DIRECTION_DOWN:
      return directionDown;
    default:
      return () => {};
  }
}

export { getAnimationModifier, getProgressModifier };
