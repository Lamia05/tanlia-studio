import React from 'react'
import Navbar from '../Componennts/Navbar'
import Hero from '../Componennts/Hero'
import Categories from '../Componennts/categories'
import Footer from '../Componennts/footer'
import ProductSection from '../Componennts/ProductSection'
import CollectionSection from '../Componennts/CollectionSection'
import IntroSection from '../Componennts/IntroSection'
import ReviewSection from '../Componennts/ReviewSection'
import JoinUs from '../Componennts/JoinUs'




export default function() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Categories></Categories>
      <ProductSection></ProductSection>
      <CollectionSection></CollectionSection>
      <IntroSection></IntroSection>
      <ReviewSection></ReviewSection>
      <JoinUs></JoinUs>

  
      <Footer></Footer>

    </div>
  )
}

