import React from "react";
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

// import islandScene from "../assets/3d/floating_island_2.glb";
import islandScene from "../assets/3d/island.glb";

const Island = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  const islandRef = useRef();

  const { gl, viewport } = useThree();
  const { scene, animations } = useGLTF(islandScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    lastX.current = clientX;
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;

      const delta = (clientX - lastX.current) / viewport.width;

      islandRef.current.rotation.y += delta * Math.PI * 0.01;
      lastX.current = clientX;
      rotationSpeed.current = delta * Math.PI * 0.01;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y += 0.01 * Math.PI;
    } else if (e.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y -= 0.01 * Math.PI;
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  //an useFrame to update the rotationSpeed and dampingFactor
  useFrame(() => {

    if (!isRotating) {
      // Apply damping factor
      rotationSpeed.current *= dampingFactor;

      // Stop rotation when speed is very small
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      // When rotating, determine the current stage based on island's orientation
      const rotation = islandRef.current.rotation.y;
      
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  })

  //an useEffect to call all the above functions using eventListner
  useEffect(() => {
    gl.domElement.addEventListener("pointerdown", handlePointerDown);
    gl.domElement.addEventListener("pointerup", handlePointerUp);
    gl.domElement.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      gl.domElement.removeEventListener("pointerdown", handlePointerDown);
      gl.domElement.removeEventListener("pointerup", handlePointerUp);
      gl.domElement.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl, handlePointerDown, handlePointerMove, handlePointerUp]);

  return (
    <mesh ref={islandRef} {...props}>
      <primitive object={scene}/>
    </mesh>
  );
};

export default Island;
