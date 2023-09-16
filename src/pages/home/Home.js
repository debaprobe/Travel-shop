import React from 'react'
import Header from '../../components/header/Header'
import Hero from '../../components/herosection/Hero'
import Support from '../../components/support/Support'
import Productcard from '../../components/products/Productcard'
import Gallery from '../../components/gallery/Gallery'
import CeoSpeak from '../../components/ceoSpeak/CeoSpeak'
import End from '../../components/end/End'
import { Routes } from 'react-router-dom'

export default function Home() {
  return (
    <>
    
    <Header/>
    
    <Hero src='https://wallpapercave.com/wp/wp1903461.jpg' headings='Serving you
        since 1989.' subHeadings="Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City" buttonName='Shop Merch'/>
    <Support/>
    <Productcard/>
    <Hero src='https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' headings='Serving you
        since 1989.' subHeadings="As an outdoor shop, we have taken precautionary measures to ensure the safety of all our customers and team members." buttonName='Read Our Statement'/>
    <div className='container'>
        <div className='left-container'>
            <h3>SHOP PRODUCTS</h3>
            <h1>Open 24/7/365</h1>
        </div>
      </div>
      <Gallery/>
      <CeoSpeak/>
      <End/>
    </>
  )
}
