import React from 'react'
import './Hero.css'
function Hero({src,headings,subHeadings,buttonName}) {
  return (
    <>
    <div className='image'>
    <img  src={src} alt='travelbag image'/>
   
    
    <p className='herotext'>
        <h1>{headings}</h1>
        
        <h2>{subHeadings}</h2>
        <button><h2>{buttonName}</h2></button>
    </p>
    </div>
    </>
  )
}

export default Hero;