import { Canvas } from "@react-three/fiber";
import { Experience } from "./component/Experience";
import style from "./../../style/ScrollAnimation.module.css";

export default function ScrollAnimations() {
  return (
    <div className={`${style.section}`}>
      <Canvas
        camera={{
          fov: 64,
          position: [2.3, 1.5, 2.3],
        }}
      >
        <Experience />
      </Canvas>
    </div>
  );
}
