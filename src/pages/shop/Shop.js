import React from 'react'
import './Shop.css'
import Header from '../../components/header/Header'
import End from '../../components/end/End'
import Gallery from '../../components/gallery/Gallery'


export default function Shop() {
  return (
    <>
     <div >
        <Header/>  
        <div className='head'>
            <h1>Shop our products</h1>
        </div>
    </div>
    <div className='shop-container'>
      <img src='https://assets.website-files.com/5e853c3383474026e43f2c78/5e856e41c718420c18dd6751_patrick-hendry-eDgUyGu93Yw-unsplash.jpg' alt='travel'/>
      <button>Featured Item</button>
      <h3>White Tent <br/> $200.00 USD</h3>
    </div>
    <div>
      <div className='products'>
      <h3>Shop by Category</h3>
      <button><h3>Gift Cards</h3></button>
      <button><h3>Tents</h3></button>
      <button><h3>Accessories</h3></button>
      <button><h3>Packs</h3></button>
      </div>
    </div>
    <div className='shop-container-end'>

    <Gallery/>
    <End/>
    </div>
    </>
  )
}
