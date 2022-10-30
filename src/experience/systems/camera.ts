import { PerspectiveCamera } from "three";

export const createCamera = () => {
  const camera = new PerspectiveCamera(70, 1, 0.1, 1100);
  camera.position.set(6, 8, 6);

  return camera;
};
