import { OrbitControls } from "@react-three/drei";
import Woman from "./Woman";


export const AnimateModel = () => {
  return (
    <>
    <OrbitControls />
    <ambientLight intensity={2} />
    <directionalLight
      position={[-5, 5, 5]}
      castShadow
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024} />

    <group position={[0, -1, 0]}>
      <Woman />
    </group>

    <mesh
      scale={[5, 5, 5]}
      rotation={[-0.5 * Math.PI, 0, 0]}
      position={[0, -1, 0]}
      receiveShadow
    >
      <planeGeometry arg={[10, 10, 1, 1]} />
      <shadowMaterial transparent opacity={0.2} />
    </mesh>
    </>
  );

};
