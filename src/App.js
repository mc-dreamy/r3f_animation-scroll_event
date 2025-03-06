import { useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, useAnimations, useScroll, ScrollControls, SoftShadows } from "@react-three/drei"
import { EffectComposer, TiltShift2 } from "@react-three/postprocessing"

export const App = () => (
  <Canvas shadows gl={{ antialias: false }} camera={{ position: [1, 0.5, 2.5], fov: 50 }}>
    <color attach="background" args={["#f0f0f0"]} />
    <fog attach="fog" args={["#f0f0f0", 0, 20]} />
    <ambientLight intensity={0.5} />
    <directionalLight intensity={2} position={[-5, 5, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
    
    <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1.01, 0]} receiveShadow>
      <planeBufferGeometry args={[10, 10, 1, 1]} />
      <shadowMaterial transparent opacity={0.75} />
    </mesh>
    <SoftShadows size={40} samples={16} />
    <EffectComposer disableNormalPass multisampling={4}>
      <TiltShift2 blur={1} />
    </EffectComposer>
  </Canvas>
)
