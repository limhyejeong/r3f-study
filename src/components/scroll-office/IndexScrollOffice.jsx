import { Canvas } from "@react-three/fiber";
import { ScrollOffice } from "./ScrollOffice";
import style from "../style/ScrollOffice.module.css";

export default function IndexScrollOffice() {
  return (
    <div className={`${style.section}`}>
      <Canvas
        camera={{
          fov: 64,
          position: [2.3, 1.5, 2.3],
        }}
      >
        <ScrollOffice />
      </Canvas>
    </div>
  );
}
