import type { Camera, Scene, WebGLRenderer } from "three";
import { framerateLimit } from "../../config";
import type { TickCallback } from "../../types";
import { stats } from "../../utils";

export * from "./camera";
export * from "./renderer";
export * from "./resizer";
export * from "./controls";

const interval = 1000 / framerateLimit;

export const update = (
  renderer: WebGLRenderer,
  scene: Scene,
  camera: Camera,
  triggerUpdatables: CallableFunction,
  time = 0,
  previous = 0
) => {
  if (time - previous > interval) {
    triggerUpdatables((time - previous) / 1000);
    renderer.render(scene, camera);

    previous = time - ((time - previous) % interval);

    stats.update();
  }

  requestAnimationFrame(time => update(renderer, scene, camera, triggerUpdatables, time, previous));
};

export const setupUpdatables = () => {
  const updatables: TickCallback[] = [];

  const addToUpdatables = (c: TickCallback) => updatables.push(c);
  const triggerUpdatables = (delta: number) => {
    for (const tick of updatables) tick(delta);
  };

  return { addToUpdatables, triggerUpdatables };
};
