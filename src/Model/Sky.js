import React, { useRef } from 'react'
import skyScene from './../assets/3d/free_skybox_anime_village.glb'
// import skyScene from './../assets/3d/sky.glb'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Sky = ({...props}) => {

    const {scene, animations} = useGLTF(skyScene)
    console.log(animations)
    //as we can see there is no animations in this 3d model
    //so we need to explicitly rotate the image

    //create a pointer to the specific mesh
    const skyRef = useRef()

    //useFrame is used to perform animation in each frame 
    useFrame(() => {

        //rotate the mesh around the y axis
        skyRef.current.rotation.y += 0.0007
    })

  return (
    <mesh ref={skyRef} {...props}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Sky