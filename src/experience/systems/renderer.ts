import { sRGBEncoding, WebGLRenderer } from "three";

export const createRenderer = () => {
  const renderer = new WebGLRenderer({ antialias: true });

  renderer.physicallyCorrectLights = true;
  renderer.shadowMap.enabled = true;
  renderer.outputEncoding = sRGBEncoding;

  return renderer;
};
