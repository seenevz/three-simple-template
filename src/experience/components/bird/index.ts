import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import parrotGlb from "../../../assets/models/parrot.glb?url";
import { setupModel } from "./setupModel";

export async function loadBird() {
  const loader = new GLTFLoader();

  const birdData = await loader.loadAsync(parrotGlb);

  const parrot = setupModel(birdData);

  parrot.position.set(0, 3, 0);

  return parrot;
}
