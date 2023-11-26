import React, { Suspense, useState } from 'react'
import  emailjs from '@emailjs/browser'
import Fox from '../Model/Fox'
import { Canvas } from '@react-three/fiber'
import Loader from '../Components/Loader'
import { useEffect } from 'react'


const Contacts = ({mode, setIsHome}) => {

  useEffect(()=>{
    setIsHome(false)
  },[])

  const[form, setForm] = useState({name:"", email:"", message:""})
  const[isLoading, setIsLoading] = useState(false)
  const[isRotating, setIsRotating] = useState("idle")

  const handleChange = (e) =>{
    setForm({...form, [e.target.name]: e.target.value})
    //console.log(form)

    if(isRotating !== "walk"){
      setIsRotating("walk")
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setIsLoading(true)
    setIsRotating("hit")

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Subhadeep',
        from_email: form.email,
        to_email: 'thehitmansubhadeepsarkar@gmail.com',
        message: form.message
      },
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then((res)=>{
      console.log(res)
      setIsLoading(false)
      alert('Message sent successfully')
      setForm({name:"", email:"", message:""})
    }).catch((err)=>{
      console.log(err)
      setIsLoading(false)
      alert('Something went wrong')
      setForm({name:"", email:"", message:""})
    })
  }

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className={`head-text ${mode ? 'text-yellow-50':'text-black'}`}>Contact Me</h1>

        <form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit}>
          <label className={`${mode?'text-yellow-100':'text-black-500'} font-semibold`}>
            Name
            <input 
            type="text"
            name='name'
            placeholder='Enter your name'
            className='input'
            required
            value={form.name}
            onChange={handleChange}
            />
          </label>
          <label className={`${mode?'text-yellow-100':'text-black-500'} font-semibold`}>
            Email
            <input 
            type="email"
            name='email'
            placeholder='Enter your email address'
            className='input'
            required
            value={form.email}
            onChange={handleChange}
            />
          </label>
          <label className={`${mode?'text-yellow-100':'text-black-500'} font-semibold`}>
            Message
            <textarea
            type="text"
            name='message'
            rows='4'
            placeholder='How can i help you'
            className='textarea'
            required
            value={form.message}
            onChange={handleChange}
            />
          </label>
          <button
          type='submit'
          className='btn'
          disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
      <Canvas
      camera={{
        position:[0,0,5],
        fov:75,
        near:0.1,
        far:1000
      }}
      >
        <directionalLight intensity={2.5} position={[0,0,1]}/>
        <Suspense fallback={<Loader/>}>
          <Fox
          isRotating={isRotating}
          position={[0.8,0.35,0]}
          rotation={[12.6,-0.9,0]}
          scale={[0.5, 0.6,0.6]}
          />
        </Suspense>
      </Canvas>
      </div>
    </section>
  )
}

export default Contacts