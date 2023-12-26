import { Canvas } from "@react-three/fiber";
import { MonsterStage } from "./MonsterStage";

export default function IndexMonsterStage() {
  return (
    <div className="canvasWrap">
      <Canvas>
        <MonsterStage />
      </Canvas>
    </div>
  );
}
