import { BackSide, Color, Mesh, ShaderMaterial, SphereGeometry } from "three";
import vertShader from "../../shaders/skydome/skydome.vert?raw";
import fragShader from "../../shaders/skydome/skydome.frag?raw";

const uniforms = {
  topColor: { value: new Color(0x0077ff) },
  bottomColor: { value: new Color(0xffffff) },
  offset: { value: 33 },
  exponent: { value: 0.6 },
};

export const createSkyDome = () => {
  const skyGeo = new SphereGeometry(500, 32, 15);
  const skyMat = new ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vertShader,
    fragmentShader: fragShader,
    side: BackSide,
  });

  return new Mesh(skyGeo, skyMat);
};
