import { PCFSoftShadowMap, sRGBEncoding, WebGLRenderer } from "three";

export const createRenderer = () => {
  const renderer = new WebGLRenderer({ antialias: true });

  renderer.physicallyCorrectLights = true;
  renderer.shadowMap.enabled = true;
  renderer.outputEncoding = sRGBEncoding;
  renderer.shadowMap.type = PCFSoftShadowMap;

  renderer.toneMappingExposure = 3;

  return renderer;
};
