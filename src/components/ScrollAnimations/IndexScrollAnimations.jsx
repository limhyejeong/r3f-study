import { Canvas } from "@react-three/fiber";
import { ScrollAnimations } from "./ScrollAnimations";
import style from "../style/ScrollAnimation.module.css";

export default function IndexScrollAnimations() {
  return (
    <div className={`${style.section}`}>
      <Canvas
        camera={{
          fov: 64,
          position: [2.3, 1.5, 2.3],
        }}
      >
        <ScrollAnimations />
      </Canvas>
    </div>
  );
}
