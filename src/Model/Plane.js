import React, { useRef } from 'react'
import planeScene from './../assets/3d/plane.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Plane = ({isRotating, ...props}) => {
  const ref = useRef()
  const {scene, animations} = useGLTF(planeScene)

  const {actions} = useAnimations(animations, ref)

  console.log(actions)

  useFrame(()=>{
    actions.Main.play()
  })

  return (
    <mesh ref={ref} {...props}>
      <primitive object={scene}/>
    </mesh>
  )
}

export default Plane