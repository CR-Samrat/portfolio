import React, { useEffect, useRef } from 'react'
import foxScene from './../assets/3d/fox.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

const Fox = ({isRotating ,...props}) => {
    const foxRef = useRef()
    const {scene, animations} = useGLTF(foxScene)

    const {actions} = useAnimations(animations, foxRef)

    useEffect(()=>{
      Object.values(actions).forEach((action) => action.stop());
      
      //apply animation based on isRotating
      if(actions[isRotating]){
        actions[isRotating].play()
        console.log("Current action ",isRotating)
      }
    },[actions,isRotating])
    
  return (
    <mesh {...props} ref={foxRef}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Fox