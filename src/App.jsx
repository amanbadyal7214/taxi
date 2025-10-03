import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Reviews from './components/Reviews'
import Services from './components/Services'
import Features from './components/Features'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Features />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App
