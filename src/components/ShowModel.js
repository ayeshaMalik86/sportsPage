import React, { useRef, useState, Suspense, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Html, Text } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import * as THREE from 'three';

const FloatingGroup = ({ children }) => {
  const groupRef = useRef();
  const SPEED = 3;

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * SPEED) * 0.2;
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

const Model = () => {
  const fbx = useLoader(FBXLoader, '/assets/models/test.fbx');

  useEffect(() => {
    fbx.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({ color: '#008000' });
      }
    });
  }, [fbx]);

  return <primitive object={fbx} scale={0.03} />;
};

function HoverableText({ position, fontSize, color, rotation = [0, 0, 0], scale = [1, 1, 1], children }) {
  const textRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (textRef.current) {
      textRef.current.scale.x = hovered
        ? Math.min(textRef.current.scale.x + 0.05, 1.2)
        : Math.max(textRef.current.scale.x - 0.05, 1);
      textRef.current.scale.y = hovered
        ? Math.min(textRef.current.scale.y + 0.05, 1.2)
        : Math.max(textRef.current.scale.y - 0.05, 1);
      textRef.current.scale.z = hovered
        ? Math.min(textRef.current.scale.z + 0.05, 1.2)
        : Math.max(textRef.current.scale.z - 0.05, 1);
    }
  });

  return (
    <Text
      ref={textRef}
      position={position}
      fontSize={fontSize}
      color={color}
      rotation={rotation}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {children}
    </Text>
  );
}

function ShowModel() {
  return (
    <div className="relative h-screen font-mona mb-20 border-2 border-black m-3 rounded-3xl">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center mt-12 font-semibold">
        Our <span className="text-yellow-500">Vision</span>
      </h1>

      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        <Suspense fallback={<Html center><div style={{ color: 'white', textAlign: 'center' }}>Loading 3D Model...</div></Html>}>
          <FloatingGroup>
            <Model />

            <HoverableText position={[0, 1.5, 0]} fontSize={0.2} color="#FFBB01">
              Eyes on the ball!
            </HoverableText>

            <HoverableText position={[1.5, 0, 0]} fontSize={0.2} color="#FFBB01" rotation={[0, 0, Math.PI / 2]}>
              Fastball incoming!
            </HoverableText>

            <HoverableText position={[0, 0, 2]} fontSize={0.2} color="#FFBB01">
              Dirt = dedication!
            </HoverableText>

            <HoverableText position={[-1.5, 0, 0]} fontSize={0.2} color="#FFBB01" rotation={[0, 0, Math.PI / 2]}>
              Take the lead!
            </HoverableText>

            <HoverableText position={[0, -1.5, 0]} fontSize={0.2} color="#FFBB01">
              Dirt = dedication!
            </HoverableText>

            <HoverableText position={[0, 0, -2]} fontSize={0.2} color="#FFBB01" rotation={[0, Math.PI, 0]} scale={[-1, 1, 1]}>
              Leave it all!
            </HoverableText>
          </FloatingGroup>
        </Suspense>

        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default ShowModel;
