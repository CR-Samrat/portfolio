import React from 'react'
import { Link } from 'react-router-dom'
import arrow from './../assets/icons/arrow.svg'

const HomeInfo = ({currentStage}) => {

  const infoBox = (text, link, btnText) =>{

      return(
        <div className='info-box'>
          <p className='font-medium sm:text-xl text-center'>{text}</p>
          <Link to={link} className='neo-brutalism-white neo-btn'>
          {btnText}
          <img src={arrow} alt='loading' className='w-4 h-4 object-contain'/>
          </Link>
        </div>
      )
  }

  const renderContent = {
    1:(
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hii.. I'm <span className='font-semibold'>Subhadeep </span>👋
        <br/>
         And welcome to my portfolio
      </h1>
    ),
    2:(
      infoBox("I'm a Software developer from West Bengal","/about","About me")
    ),
    3:(
      infoBox("Did multiple projects to success over the years","/projects","Visit my projects")
    ),
    4:(
      infoBox("Need a project done or Looking for a dev?","/contact","Contact me")
    )
  }

  return (
    <div>
      {renderContent[currentStage] || null}
    </div>
  )
}

export default HomeInfo