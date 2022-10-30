import { DirectionalLight, HemisphereLight } from "three";

function createLights() {
  const ambLight = new HemisphereLight(0xffffff, 0xffffff, 0.6);
  ambLight.color.setHSL(0.6, 1, 0.6);
  ambLight.groundColor.setHSL(0.095, 1, 0.75);

  const light2 = new DirectionalLight("white", 5);

  light2.castShadow = true;

  light2.shadow.mapSize.width = 1024;
  light2.shadow.mapSize.height = 1024;
  light2.shadow.camera.far = 100;

  light2.position.set(10, 10, 10);

  return [light2, ambLight];
}

export { createLights };
