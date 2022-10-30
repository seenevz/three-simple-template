import { Clock } from "three";
import Stats from "three/examples/jsm/libs/stats.module";

const stats = Stats();

const setupClock = () => {
  const clock = new Clock();
  let delta = 0;
  return {
    delta: () => delta,
    updateClockDelta: () => (delta = clock.getDelta()),
  };
};

// stats.setMode(1);

const waitMs = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export { stats, setupClock, waitMs };
