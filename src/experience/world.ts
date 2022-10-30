import type { Camera, Scene } from "three";
import type { TickCallback } from "../types";
import { createFloor, createLights, createSkyDome, loadBird } from "./components";

export default (scene: Scene, camera: Camera, addToUpdatables: (c: TickCallback) => void) => {
  scene.add(camera);
  return loadBird().then(bird => {
    scene.add(bird, createFloor(), createSkyDome(), ...createLights());
    addToUpdatables(bird.tick);
  });
};
