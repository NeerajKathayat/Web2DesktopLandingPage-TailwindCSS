import { useState } from 'react'
import './App.css'
import NavBar from './assets/NavBar'
import Hero from './assets/Hero'
import StepByStep from './assets/StepByStep'
import BentoGrid from './assets/BentoGrid'
import CompanyFeatureLine from './assets/CompanyFeatureLine'
import CustomerStories from './assets/CustomerStories'
import PricingSection from './assets/PricingSection'
import FAQSection from './assets/FAQSection'
import Footer from './assets/Footer'

function App() {

  return (
       <>
        <NavBar/>
        <Hero/>
        <StepByStep/>
        <BentoGrid/>
        <CompanyFeatureLine/>
        <CustomerStories/>
        <PricingSection/>
        <FAQSection/>
        <Footer/>
       </>
  )
}

export default App
