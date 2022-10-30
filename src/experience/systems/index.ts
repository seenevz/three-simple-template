import type { Camera, Scene, WebGLRenderer } from "three";
import { framerateLimit } from "../../config";
import type { TickCallback } from "../../types";
import { setupClock, stats, waitMs } from "../../utils";

export * from "./camera";
export * from "./renderer";
export * from "./resizer";
export * from "./controls";

const { delta, updateClockDelta } = setupClock();

let then = 0;
// let delta = 0;
const interval = 1 / framerateLimit;

export const update = (
  renderer: WebGLRenderer,
  scene: Scene,
  camera: Camera,
  triggerUpdatables: CallableFunction,
  time = 0
) => {
  requestAnimationFrame(time => update(renderer, scene, camera, triggerUpdatables, time));
  updateClockDelta();

  then += delta();

  if (then > interval) {
    triggerUpdatables(then);
    renderer.render(scene, camera);

    then = delta() % interval;

    stats.update();
  }
};

export const setupUpdatables = () => {
  const updatables: TickCallback[] = [];

  const addToUpdatables = (c: TickCallback) => updatables.push(c);
  const triggerUpdatables = (delta: number) => {
    for (const tick of updatables) tick(delta);
  };

  return { addToUpdatables, triggerUpdatables };
};
