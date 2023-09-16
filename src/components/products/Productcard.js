import React from 'react'
import './Productcard.css'
export default function Productcard() {
  return (
    <>
    <div className='box'>
        <div >
            <div className='box1' >
            <h1>01</h1>
            <p>SHOP PRODUCTS</p>
            </div>
            <h2>Our full product line is still available online here on our site! Getting outside and hiking is still something you can do. Get your gear now!</h2>
        </div>
        <div >
            <div className='box1'>
            <h1>02</h1>
            <p>DONATE</p>
            </div>
            <h2>Since we've changed the way we operate to online only, and to ensure your safety, not all our staff is working. Donate to keep them afloat.</h2>
        </div>
        <div>
            <div className='box1'>
            <h1>03</h1>
            <p>BUY GIFT CARDS</p>
            </div>
            <h2>Have all the outdoor gear you need for now? Buy a gift card and use it later or share it with friends and family.</h2>
        </div>
    </div>
    </>
  )
}
