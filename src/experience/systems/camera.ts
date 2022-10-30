import { PerspectiveCamera } from "three";

export const createCamera = () => {
  const camera = new PerspectiveCamera(35, 1, 0.1, 1100);
  camera.position.set(12, 8, 12);

  return camera;
};
