import React, { useRef } from 'react'
import birdScene from './../assets/3d/bird.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Bird = () => {
  const birdRef = useRef()
    const {scene, animations} = useGLTF(birdScene)
    const {actions} = useAnimations(animations, birdRef)

    useFrame(()=>{
        actions['Take 001'].play()

        if(birdRef.current.position.x <= 10){
          birdRef.current.position.x += 0.005
        }

        if(birdRef.current.position.x > 10){
          birdRef.current.rotation.y = Math.PI
          birdRef.current.position.z -= 0.005
        }
      })

  return (
    <mesh ref={birdRef} 
    position={[-10, 2, -4]}
    scale={[0.003, 0.003, 0.003]}
    >
        <primitive object={scene}/>
    </mesh>
  )
}

export default Bird