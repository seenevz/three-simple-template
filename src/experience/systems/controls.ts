import { Camera } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { UpdatableObject } from "../../types";

export function createControls(
  camera: Camera,
  domElement: HTMLElement
): UpdatableObject<OrbitControls> {
  const controls = new OrbitControls(
    camera,
    domElement
  ) as unknown as UpdatableObject<OrbitControls>;

  controls.enableDamping = true;
  controls.maxDistance = 100;
  controls.minDistance = 2;
  controls.maxPolarAngle = Math.PI / 2;

  controls.target.y = 3;

  controls.tick = () => {
    controls.update();
  };

  return controls;
}
