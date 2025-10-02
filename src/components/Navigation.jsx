import React, { useState } from 'react'
import { Camera, Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = ['Portfolio', 'Events', 'About', 'Contact']

  return (
    <nav className="relative z-50 w-full px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Camera className="w-8 h-8 text-white" />
          <span className="text-xl font-semibold text-white">LoveCraft</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a key={item} href="#" className="nav-link">
              {item}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-white text-warm-brown px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200">
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-warm-brown/95 backdrop-blur-sm border-t border-white/20">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a 
                key={item} 
                href="#" 
                className="block text-white/80 hover:text-white transition-colors duration-200 py-2"
              >
                {item}
              </a>
            ))}
            <button className="w-full bg-white text-warm-brown px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200 mt-4">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation