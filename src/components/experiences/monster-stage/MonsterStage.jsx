import { Canvas } from "@react-three/fiber";
import { Experience } from "./component/Experience";
import style from "./../../style/MonsterStage.module.css";

export default function MonsterStage() {
  return (
    <div className={`${style.section}`}>
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
    </div>
  );
}
