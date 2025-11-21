import React from 'react'
import Navbar from '../Componennts/Navbar'
import Hero from '../Componennts/Hero'
import PopularProducts from '../Componennts/popularProducts'
import Categories from '../Componennts/categories'
import SustainabilitySection from '../Componennts/SustainabilitySection'
import Footer from '../Componennts/footer'




export default function() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Categories></Categories>

      <PopularProducts></PopularProducts>
      <SustainabilitySection></SustainabilitySection>
      <Footer></Footer>

    </div>
  )
}

