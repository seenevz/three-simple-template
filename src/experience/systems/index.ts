import type { Camera, Scene, WebGLRenderer } from "three";
import { framerateLimit } from "../../config";
import type { TickCallback } from "../../types";
import { stats } from "../../utils";

export * from "./camera";
export * from "./renderer";
export * from "./resizer";
export * from "./controls";

let then = 0;
let delta = 0;
const interval = 1000 / framerateLimit;

export const update = (
  renderer: WebGLRenderer,
  scene: Scene,
  camera: Camera,
  triggerUpdatables: CallableFunction,
  time = 0
) => {
  requestAnimationFrame(time => update(renderer, scene, camera, triggerUpdatables, time));
  delta = time - then;

  if (delta > interval) {
    triggerUpdatables(delta / 1000);
    renderer.render(scene, camera);

    then = time - (delta % interval);

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
