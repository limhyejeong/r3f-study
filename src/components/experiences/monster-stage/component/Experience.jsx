import { useFrame } from "@react-three/fiber";
import {
  Environment,
  MeshPortalMaterial,
  OrbitControls,
  RoundedBox,
  useTexture,
  Text,
  CameraControls,
} from "@react-three/drei";
import React, { useState, useRef } from "react";
import * as THREE from "three";
import { Fish } from "./Fish";
import { Dino } from "./Dino";
import { Cactoro } from "./Cactoro";
import { easing } from "maath";

export const Experience = () => {
  const [active, setActive] = useState(null);

  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <CameraControls />

      <MonsterStage
        name="Fish"
        color={"#0390be"}
        texture={"../textures/anime_water_world.jpg"}
        active={active}
        setActive={setActive}
      >
        <Fish scale={0.6} position-y={-1} />
      </MonsterStage>

      <MonsterStage
        name="Dino"
        color={"#8d3a67"}
        texture={"../textures/anime_lava_world.jpg"}
        position-x={-2.5}
        rotation-y={Math.PI / 8}
        active={active}
        setActive={setActive}
      >
        <Dino scale={0.6} position-y={-1} />
      </MonsterStage>

      <MonsterStage
        name="Cactoro"
        color={"#6c9244"}
        texture={"../textures/anime_cactus_forest_world.jpg"}
        position-x={2.5}
        rotation-y={-Math.PI / 8}
        active={active}
        setActive={setActive}
      >
        <Cactoro scale={0.6} position-y={-1} />
      </MonsterStage>
    </>
  );
};

const MonsterStage = ({
  children,
  texture,
  name,
  color,
  active,
  setActive,
  ...props
}) => {
  const map = useTexture(texture);
  const portalMaterial = useRef();

  useFrame((_state, delta) => {
    const worldOpen = active === name;

    easing.damp(portalMaterial.current, "blend", worldOpen ? 1 : 0, 0.2, delta);
  });

  return (
    <group {...props}>
      <Text
        font="../fonts/Caprasimo-Regular.ttf"
        fontSize={0.3}
        position={[0, -1.3, 0.05]}
        anchorY={"bottom"}
      >
        {name}
        <meshBasicMaterial color={color} toneMapped={false} />
      </Text>

      <RoundedBox
        args={[2, 3, 0.1]}
        onDoubleClick={() => setActive(active === name ? null : name)}
      >
        <MeshPortalMaterial ref={portalMaterial} side={THREE.DoubleSide}>
          <ambientLight intensity={1} />
          <Environment preset="sunset" />
          {children}
          <mesh>
            <sphereGeometry args={[5, 64, 64]} />
            <meshStandardMaterial map={map} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </group>
  );
};
