import React from 'react'
import './Gallery.css'
export default function Gallery() {
  return (
    <>
    <div className='boxes'>
        <div >
            <div className='boxes1' >
            <img src='https://assets.gqindia.com/photos/62c4236b5b6a37ba7f473d6f/1:1/w_1079,h_1079,c_limit/solo_travel_top-image.jpg' alt=''/>
            </div>
            <div>
            <h2>White Tent<br/>
            $ 200.00 USD</h2>
            <button className='btn'><h2>Details</h2></button>
            </div>
            
        </div>
        <div >
            <div className='boxes1'>
            <img src='https://assets.website-files.com/5e853c3383474026e43f2c78/5e8542c1248e59128e08e3e9_ryan-holloway-JyDmUaXMib4-unsplash.jpg' alt=''/>
            </div>
            <div>

            <h2>Coffee Tumbler<br/>
            $35.00 USD</h2>
            <button className='btn'><h2>Details</h2></button>
            </div>
        </div>
        <div>
            <div className='boxes1'>
            <img src='https://assets.website-files.com/5e853c3383474026e43f2c78/5e85425605cae11f20d46181_denisse-leon-J7CjWufjmg4-unsplash.jpg' alt=''/>
            </div>
            <div>
            <h2>Blue Canvas Pack<br/>
            $ 95.00 USD</h2>
            <button className='btn'><h2>Details</h2></button>
            </div>
        </div>
            <button className='allProducts'><h2>View All Products</h2></button>
    </div>
    </>
  )
}
