import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Headerstyle.css'

export default function Header() {
  const [itemCounter,setItemCounter] = useState(0)
  return (
    <>
    <nav>
    <div className='nav'>
        <div className='nav-top'>
            <button><h2>Announcement</h2></button>
            <h2 style={{padding:'12px'}}>How we are responding to COVID-19</h2>
        </div>
        <div className='nav-bottom'>
          <img src='https://i.pinimg.com/550x/11/29/9f/11299f8a32e091a94bafa1e87685a8b5.jpg' alt='logo'/>
            <h2 style={{cursor:'pointer', padding: '10px'}}>
              <a style={{textDecoration:'none',color:'white'}}href='/'>A C M E</a>
            </h2>
              <ul>
                <li><h2><Link to='/'>Home</Link></h2></li>
                <li><h2><Link to='/about'>About</Link></h2></li>
                <li><h2><Link to='/shop'>Shop</Link> </h2></li>
                <li><h2><Link to='/contact'>Contact</Link></h2></li>
              </ul>
            <button onClick={()=> setItemCounter(itemCounter + 1)}><h2 style={{margin: '12px 0px'}}>Cart : {itemCounter} </h2></button>
        </div>
    </div>
    </nav>
    </>
  )
}
