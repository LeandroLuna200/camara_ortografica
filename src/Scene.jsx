import { Canvas } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import { useState } from "react";

import Effects from "./Effects";
import Camera from "./Camera";

export default function Scene() {
  return (
    <Canvas frameloop="demand" shadows dpr={[1, 2]}>
      <Camera />
      <directionalLight
        intensity={1}
        position={[2, 2, 0]}
        color="#ffaaff"
        distance={5}
      />
      <spotLight
        intensity={2}
        position={[-5, 10, 2]}
        angle={0.2}
        penumbra={1}
      />
      <Boxes />
      <Effects />
    </Canvas>
  );
}

function Boxes() {
  const [boxAHover, setBoxAHover] = useState(false);
  const [boxBHover, setBoxBHover] = useState(false);
  const [boxCHover, setBoxCHover] = useState(false);
  const [boxDHover, setBoxDHover] = useState(false);
  return (
    <>
      <Box
        position={[-2, 0.5, 0]}
        scale={boxAHover ? 1.25 : 1}
        onPointerOver={() => setBoxAHover(true)}
        onPointerLeave={() => setBoxAHover(false)}
      >
        <meshStandardMaterial
          attach="material"
          color={boxAHover ? "#ff8888" : "red"}
        />
      </Box>
      <Box
        position={[2, 0.5, 0]}
        scale={boxBHover ? 1.25 : 1}
        onPointerOver={() => setBoxBHover(true)}
        onPointerLeave={() => setBoxBHover(false)}
      >
        <meshStandardMaterial
          attach="material"
          color={boxBHover ? "#88ff88" : "green"}
        />
      </Box>
      <Box
        position={[-0.5, 0.5, -2]}
        scale={boxCHover ? 1.25 : 1}
        onPointerOver={() => setBoxCHover(true)}
        onPointerLeave={() => setBoxCHover(false)}
      >
        <meshStandardMaterial
          attach="material"
          color={boxCHover ? "#8888ff" : "blue"}
        />
      </Box>
      <Box
        position={[0.5, 0.5, 2]}
        scale={boxDHover ? 1.25 : 1}
        onPointerOver={() => setBoxDHover(true)}
        onPointerLeave={() => setBoxDHover(false)}
      >
        <meshStandardMaterial
          attach="material"
          color={boxDHover ? "#ffff88" : "orange"}
        />
      </Box>
      <Box position={[0, -0.05, 0]} scale={[10, 0.1, 10]}>
        <meshStandardMaterial attach="material" color="#f3f3f3" />
      </Box>
    </>
  );
}
