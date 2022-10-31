import { Color, Fog, Scene } from "three";

export const createMainScene = () => {
  const scene = new Scene();

  scene.background = new Color().setHSL(0.6, 0, 1);

  scene.fog = new Fog(0xffffff, 0.1, 500);

  return scene;
};
