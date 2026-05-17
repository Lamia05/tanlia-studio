import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'

import ProductSection from '../Components/ProductSection'
import CollectionSection from '../Components/CollectionSection'
import IntroSection from '../Components/IntroSection'
import ReviewSection from '../Components/ReviewSection'
import JoinUs from '../Components/JoinUs'
import Footer from '../Components/Footer'
import Categories from '../Components/Categories'




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
      <Categories></Categories>

    </div>
  )
}

