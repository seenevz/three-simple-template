import { PerspectiveCamera, Scene, WebGLRenderer } from "three";

import { stats } from "../utils";
import { createMainScene } from "./components";
import {
  createCamera,
  createControls,
  createRenderer,
  createResizer,
  setupUpdatables,
  update,
} from "./systems";
import world from "./world";

const setup = (): [WebGLRenderer, PerspectiveCamera, Scene] => {
  return [createRenderer(), createCamera(), createMainScene()];
};

export const createExperience = async (container: HTMLElement) => {
  const [renderer, camera, scene] = setup();
  const { addToUpdatables, triggerUpdatables } = setupUpdatables();
  const onResize = createResizer(camera, renderer, container);
  const controls = createControls(camera, container);

  container.prepend(renderer.domElement);
  document.body.append(stats.domElement);

  addToUpdatables(controls.tick);

  await world(scene, camera, addToUpdatables);

  const startExperience = () => {
    update(renderer, scene, camera, triggerUpdatables);
  };

  return { scene, onResize, startExperience };
};
