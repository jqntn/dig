import { rotationAt } from "./rotation.js";

const {
  ArcRotateCamera,
  HemisphericLight,
  MeshBuilder,
  Scene,
  Vector3,
  WebGPUEngine,
} = BABYLON;

const CAMERA_ALPHA = -Math.PI / 2;
const CAMERA_BETA = 1.2;
const CAMERA_RADIUS = 4;
const LIGHT_INTENSITY = 0.7;

const canvas = document.querySelector("canvas");
if (!(canvas instanceof HTMLCanvasElement)) {
  throw new Error("missing canvas element");
}

const engine = await WebGPUEngine.CreateAsync(canvas);
const scene = new Scene(engine);

const camera = new ArcRotateCamera(
  "camera",
  CAMERA_ALPHA,
  CAMERA_BETA,
  CAMERA_RADIUS,
  Vector3.Zero(),
  scene,
);
camera.attachControl(canvas, true);

const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
light.intensity = LIGHT_INTENSITY;

const box = MeshBuilder.CreateBox("box", {}, scene);

addEventListener("resize", () => {
  engine.resize();
});

engine.runRenderLoop(() => {
  box.rotation.y = rotationAt(performance.now());
  scene.render();
});
