import React from 'react'
import { Play } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-hero-gradient"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
          Crafting Moments
          <br />
          <span className="text-cream">That Last a Lifetime</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Capturing love stories through timeless photography that speaks to the heart and preserves your most precious memories forever.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-white text-warm-brown px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
            View Portfolio
          </button>
          
          <button className="flex items-center space-x-2 text-white border border-white/30 px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-200">
            <Play className="w-5 h-5 fill-current" />
            <span>Watch Our Story</span>
          </button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero