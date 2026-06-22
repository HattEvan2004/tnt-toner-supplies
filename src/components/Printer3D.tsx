import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

const reduceMotion =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/** A modern office laser printer modelled from primitives. */
function PrinterModel() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!group.current || reduceMotion) return;
    const t = clock.getElapsedTime();
    group.current.rotation.y = -0.35 + Math.sin(t * 0.35) * 0.12;
    group.current.position.y = Math.sin(t * 0.8) * 0.04;
  });

  const bodyMat = useMemo(
    () => ({ color: "#2b2521", roughness: 0.62, metalness: 0.12 }),
    []
  );
  const lidMat = useMemo(
    () => ({ color: "#34302a", roughness: 0.5, metalness: 0.15 }),
    []
  );
  const darkMat = useMemo(
    () => ({ color: "#141110", roughness: 0.8, metalness: 0.05 }),
    []
  );

  return (
    <group ref={group} rotation={[0, -0.35, 0]} position={[0, -0.1, 0]}>
      {/* main chassis */}
      <RoundedBox args={[2.5, 1.35, 1.9]} radius={0.12} smoothness={4} position={[0, 0, 0]} castShadow receiveShadow>
        <meshStandardMaterial {...bodyMat} />
      </RoundedBox>

      {/* lower paper tray lip */}
      <RoundedBox args={[2.3, 0.18, 0.5]} radius={0.06} smoothness={3} position={[0, -0.62, 1.0]} castShadow>
        <meshStandardMaterial {...lidMat} />
      </RoundedBox>

      {/* top lid */}
      <RoundedBox args={[2.42, 0.28, 1.82]} radius={0.1} smoothness={4} position={[0, 0.78, 0]} castShadow receiveShadow>
        <meshStandardMaterial {...lidMat} />
      </RoundedBox>

      {/* output recess on top */}
      <RoundedBox args={[1.7, 0.16, 1.25]} radius={0.05} smoothness={3} position={[0, 0.86, 0.05]}>
        <meshStandardMaterial {...darkMat} />
      </RoundedBox>

      {/* output slot */}
      <mesh position={[0, 0.78, 0.55]}>
        <boxGeometry args={[1.5, 0.06, 0.08]} />
        <meshStandardMaterial color="#0c0a09" roughness={0.9} />
      </mesh>

      {/* sheet of paper emerging from the top */}
      <group position={[0, 0.9, 0.15]} rotation={[-0.18, 0, 0]}>
        <mesh castShadow>
          <boxGeometry args={[1.35, 0.02, 1.0]} />
          <meshStandardMaterial color="#f6f2e9" roughness={0.85} />
        </mesh>
        {/* CMYK calibration ticks printed on the sheet */}
        {["#1198bc", "#cc1c70", "#e6ad06", "#1a1512"].map((c, i) => (
          <mesh key={c} position={[-0.5 + i * 0.16, 0.012, 0.32]}>
            <boxGeometry args={[0.12, 0.005, 0.12]} />
            <meshStandardMaterial color={c} emissive={c} emissiveIntensity={0.15} roughness={0.7} />
          </mesh>
        ))}
      </group>

      {/* control panel */}
      <group position={[-0.7, 0.2, 0.96]}>
        <RoundedBox args={[0.78, 0.5, 0.06]} radius={0.04} smoothness={3}>
          <meshStandardMaterial {...darkMat} />
        </RoundedBox>
        {/* screen */}
        <mesh position={[-0.08, 0.06, 0.04]}>
          <planeGeometry args={[0.42, 0.24]} />
          <meshStandardMaterial color="#0d7e9c" emissive="#1198bc" emissiveIntensity={0.9} roughness={0.4} />
        </mesh>
        {/* buttons */}
        <mesh position={[0.26, 0.08, 0.05]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.045, 0.045, 0.03, 24]} />
          <meshStandardMaterial color="#cc1c70" emissive="#cc1c70" emissiveIntensity={0.25} />
        </mesh>
        <mesh position={[0.26, -0.08, 0.05]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.045, 0.045, 0.03, 24]} />
          <meshStandardMaterial color="#e6ad06" emissive="#e6ad06" emissiveIntensity={0.25} />
        </mesh>
      </group>

      {/* front grille lines */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[0.55, -0.1 - i * 0.16, 0.96]}>
          <boxGeometry args={[0.9, 0.03, 0.02]} />
          <meshStandardMaterial color="#1c1814" roughness={0.85} />
        </mesh>
      ))}

      {/* CMYK accent light-bars — soft backlight glow behind the printer */}
      {["#1198bc", "#cc1c70", "#e6ad06"].map((c, i) => (
        <mesh key={`bar-${c}`} position={[-0.9 + i * 0.9, -0.05, -1.7]} rotation={[0, 0, 0.08 - i * 0.08]}>
          <boxGeometry args={[0.22, 1.5, 0.04]} />
          <meshStandardMaterial
            color={c}
            emissive={c}
            emissiveIntensity={0.45}
            roughness={0.6}
            transparent
            opacity={0.55}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function Printer3D() {
  return (
    <div className="w-full aspect-[5/4] max-w-[520px]">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: false }}
        camera={{ position: [3.4, 1.9, 4.4], fov: 34 }}
        frameloop={reduceMotion ? "demand" : "always"}
      >
        <ambientLight intensity={0.65} color="#fff4e6" />
        <directionalLight
          position={[4, 6, 4]}
          intensity={1.5}
          color="#fff6ea"
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0004}
        />
        <pointLight position={[-4, 2, 3]} intensity={0.35} color="#cfe9ff" />
        {/* subtle CMYK rim light from behind — premium, not rainbow */}
        <pointLight position={[-3, 1, -3]} intensity={0.5} color="#1198bc" />
        <pointLight position={[3, 1, -3]} intensity={0.4} color="#cc1c70" />

        <Suspense fallback={null}>
          <PrinterModel />
          <ContactShadows
            position={[0, -0.82, 0]}
            opacity={0.45}
            scale={7}
            blur={2.6}
            far={4}
            resolution={1024}
            color="#1a1512"
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
