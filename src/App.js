import { useGLTF, Stage, PresentationControls, ambientLight } from "@react-three/drei";
import React from "react";
import { Canvas } from "@react-three/fiber";
import './App.css'
function Model(props) {
  const { scene } = useGLTF("/forest.glb");
  return <primitive object={scene} {...props} />;
}

export default function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Canvas
          dpr={[1, 2]}
          shadows
          style={{ position: "absolute" }}
          camera={{ position: [0, 0, 50], fov: 40 , zoom:6, focus:20}} 
          controls={false}
        >
          <PresentationControls speed={1.5} zoomSpeed={0.5} global zoom={3.5} polar={[-0.1, Math.PI / 4]}>
            <ambientLight intensity={0.5} />
            <Stage environment={null}>
              <Model scale={0.01} />
            </Stage>
          </PresentationControls>
        </Canvas>
      </div>
    </div>
  );
}
