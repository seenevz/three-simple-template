import { DoubleSide, Mesh, MeshStandardMaterial, PlaneGeometry } from "three";

export function createFloor() {
  const geometry = new PlaneGeometry(750, 750);
  const material = new MeshStandardMaterial({
    side: DoubleSide,
  });

  material.color.setHSL(0.095, 1, 0.75);
  const mesh = new Mesh(geometry, material);

  mesh.rotation.x = -Math.PI / 2;
  mesh.receiveShadow = true;

  return mesh;
}
