import React from 'react'
import Hero from '../../components/herosection/Hero'
import Header from '../../components/header/Header'
import CeoSpeak from '../../components/ceoSpeak/CeoSpeak'
import './About.css'
import End from '../../components/end/End'

export default function About() {
  return (
    <>
    <div>
      <Header/>
      <Hero src='https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e840df8e2c9cc7677e4f00e_felix-rostig-UmV2wr-Vbq8-unsplash.jpg'
            headings='Your Adventure Awaits' 
            subHeadings='Acme Outdoors has everything you need to help you get started today. Check out our wonderful collection of gear that will make your next adventure complete.' 
            buttonName='Shop Merch' />
    </div>
    <div className='reason'>
      <h3>WHY ACME OUTDOORS</h3>
      <h1>We are the best in the business</h1>
      <h2>From more than 30years, we have been leading the way across Oklahoma - creating the best posiible customer experience since 1989.</h2>
    </div>
    <div className='properties'>
      <div >
        <h2><strong><em>Lifetime Warranty</em></strong></h2>
        <h3>All our products — whether we make them or not — are backed by our lifetime warranty.</h3>
      </div>
      <div>
        <h2><strong><em>Shopping Experience</em></strong></h2>
        <h3>All our products — whether we make them or not — are backed by our lifetime warranty.</h3>
      </div>
      <div>
        <h2><strong><em>On-time delivery</em></strong></h2>
        <h3>All our products — whether we make them or not — are backed by our lifetime warranty.</h3>
      </div>
      <div>
        <h2><strong><em>Best in Class Service</em></strong></h2>
        <h3>All our products — whether we make them or not — are backed by our lifetime warranty.</h3>
      </div>
    </div>
    <CeoSpeak/>
    <div className='review'>
      <div>
        <img src='https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?s=170667a&w=0&k=20&c=S9AVbcsSpY1e6vwbnrrZHJzlAtnuSQKtmk11fDItSHE=' alt='John Doe '/>
        <h2>John Doe</h2>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</h3>
      </div>
      <div>
        <img src='https://media.istockphoto.com/id/1407759041/photo/confident-happy-beautiful-hispanic-student-girl-indoor-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=--Ei0owZ8KqwVppB5o0bMRG4aNV8VA0HHnsH1YfuxAw=' alt='Jane Doe '/>
        <h2>Jane Doe</h2>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</h3>
      </div>
    </div>
    <Hero src='https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e84f74f40a146d432ac3598_adam-solomon-WHUDOzd5IYU-unsplash%20(1)%20(1).jpg' headings={'Need Help?'} subHeadings={'Need help or assistance? Our team is standing by to make sure you get the help you need. Whether you need to adjust an order or delivery details, we are ready to help!' } buttonName={'Contact Support'}/>
    <End/>
    </>
  )
}
