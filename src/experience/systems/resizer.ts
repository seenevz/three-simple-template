import type { PerspectiveCamera, WebGLRenderer } from "three";
import { getDevicePixelRatio } from "../../config";
import type { Callback } from "../../types";

const setupResizeListener = () => {
  const callbacks: Callback[] = [];

  const onResize = (callback: Callback) => callbacks.push(callback);

  const triggerResizeListeners = () => callbacks.forEach(callback => callback());

  return { onResize, triggerResizeListeners };
};

const setupWindowListener = (callback: () => void) => window.addEventListener("resize", callback);

const setSize = (camera: PerspectiveCamera, renderer: WebGLRenderer, container: HTMLElement) => {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(getDevicePixelRatio());
};

export const createResizer = (
  camera: PerspectiveCamera,
  renderer: WebGLRenderer,
  container: HTMLElement
) => {
  const { onResize, triggerResizeListeners } = setupResizeListener();

  setSize(camera, renderer, container);

  setupWindowListener(() => {
    setSize(camera, renderer, container);
    triggerResizeListeners();
  });

  return onResize;
};
