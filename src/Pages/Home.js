import {Suspense, useState} from 'react'
import {Canvas} from '@react-three/fiber'
import  Loader  from './../Components/Loader'
import Island from '../Model/Island'
import Sky from '../Model/Sky'
import Bird from '../Model/Bird'
import Plane from '../Model/Plane'
import HomeInfo from '../Components/HomeInfo'
import { useEffect } from 'react'

const Home = ({setIsHome}) => {
  useEffect(()=>{
    setIsHome(true)
  },[])

  const [isRotating, setIsRotating] = useState(false)
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = () =>{
    let screenScale = null
    let screenPosition = [0, -6.5, -43]
    let screenRotation = [0.1, 4.7, 0]

    if(window.innerWidth < 768){
      screenScale = [0.9, 0.9, 0.9]
    }else{
      screenScale = [1.10, 1.10, 1.10]
    }

    return [screenScale, screenPosition, screenRotation];
  }

  const adjustPlaneForScreenSize = () =>{
    let screenScale, screenPosition;

    if(window.innerWidth < 768){
      screenScale = [0.0004,0.0004,0.0004]
      screenPosition = [0, -0.37, 4]
    }else{
      screenScale = [0.0005,0.0005,0.0005]
      screenPosition = [0, -0.4, 4]
    }

    return [screenScale, screenPosition];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize()

  return (
    <section className='w-full h-screen relative'>
      {/* canvas is used to render 3D images */}

      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>

      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing':'cursor-grab'}`}
      camera={{near:0.1, far: 1000}}
      >
        <Suspense fallback={<Loader/>}>

          <directionalLight position={[1, 1, 1]} intensity={1.4} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />

          <Bird/>
          <Sky
          scale={[0.01,0.01,0.01]}
          isRotating = {isRotating}
          />
          <Island
            position = {islandPosition}
            scale = {islandScale}
            rotation = {islandRotation}
            isRotating = {isRotating}
            setIsRotating = {setIsRotating}
            setCurrentStage = {setCurrentStage}
          />
          <Plane
            isRotating = {isRotating}
            position = {planePosition}
            scale = {planeScale}
            rotation = {[19, 180.6, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home