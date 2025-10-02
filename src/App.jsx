import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div className="min-h-screen bg-warm-gradient">
      <Navigation />
      <Hero />
      <Portfolio />
    </div>
  )
}

export default App