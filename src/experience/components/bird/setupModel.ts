import { AnimationMixer, Mesh } from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import type { UpdatableObject } from "../../../types";

export function setupModel(data: GLTF) {
  const model = data.scene.children[0] as UpdatableObject<Mesh>;
  const clip = data.animations[0];

  const mixer = new AnimationMixer(model);
  const action = mixer.clipAction(clip);
  action.play();

  model.castShadow = true;
  model.tick = delta => mixer.update(delta);

  return model;
}
