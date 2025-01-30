import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html, Text } from '@react-three/drei';

const Model = () => {
  const { scene } = useGLTF('/assets/models/test.glb');

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.set('#00FF00');  
    }
  });

  return <primitive object={scene} scale={0.03} />;
};

function ShowModel() {
  return (
    <div className="relative h-screen font-mona mb-20 border-2 border-black m-3 rounded-3xl">

      <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center mt-12 font-semibold">
        Displaying <span className="text-yellow-500">3D Model</span>
      </h1>


      <div className="absolute top-20 left-10 bg-black bg-opacity-60 p-4 rounded text-white">
        <h2 className="text-lg font-semibold">Model Information</h2>
        <p>This is a test model loaded from GLTF format.</p>
      </div>

      {/* 3D Scene */}
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        <Suspense
          fallback={
            <Html center>
              <div style={{ color: 'white', textAlign: 'center' }}>Loading 3D Model...</div>
            </Html>
          }
        >
          <Model />

          <Text position={[0, 1.5, 0]} fontSize={0.2} color="#FFBB01">
            Eyes on the ball!
          </Text>

          <Text position={[1.5, 0, 0]} fontSize={0.2} color="#FFBB01" rotation={[0, 0, -Math.PI / 2]}>
            Fastball incoming!
          </Text>

          <Text position={[0, 0, 2]} fontSize={0.2} color="#FFBB01">
            Dirt = dedication!
          </Text>

          <Text position={[-1.5, 0, 0]} fontSize={0.2} color="#FFBB01" rotation={[0, 0, Math.PI / 2]}>
            Take the lead!
          </Text>

          <Text position={[0, -1.5, 0]} fontSize={0.2} color="#FFBB01">
            Dirt = dedication!
          </Text>

          <Text position={[0, 0, -2]} fontSize={0.2} color="#FFBB01" rotation={[0, 0, 0]} scale={[-1, 1, 1]}>
            Leave it all!
          </Text>
        </Suspense>

        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default ShowModel;
