import { Canvas } from "@react-three/fiber";
import { AnimateModel } from "./AnimateModel";
import Interface from "./Interface";


export default function IndexAnimateModel() {
  return (
    <div className="canvasWrap">
      <Canvas shadows camera={{position: [1, 1.5, 2.5], fov: 50}} >
        <AnimateModel />
      </Canvas>
      <Interface />
    </div>
  );
}
