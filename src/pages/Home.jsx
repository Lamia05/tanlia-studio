import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Categories from '../Components/categories'
import Footer from '../Components/footer'
import ProductSection from '../Components/ProductSection'
import CollectionSection from '../Components/CollectionSection'
import IntroSection from '../Components/IntroSection'
import ReviewSection from '../Components/ReviewSection'
import JoinUs from '../Components/JoinUs'




export default function() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <ProductSection></ProductSection>
      <CollectionSection></CollectionSection>
      <IntroSection></IntroSection>
      <ReviewSection></ReviewSection>
      <JoinUs></JoinUs>

  
      <Footer></Footer>

    </div>
  )
}

