import { Canvas } from "@react-three/fiber";
import { Experience } from "./component/Experience";

export default function MonsterStage() {
  return (
    <div className="canvasWrap">
      <Canvas>
        <Experience />
      </Canvas>
    </div>
  );
}
