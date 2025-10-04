import React, { useState } from 'react'
import { Button } from './ui/button'
import { Menu, X, Car, Globe, User, Download } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('NL')

  const navItems = [
    { label: 'Taxi Companies', href: '#companies' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-gray-600 to-gray-900 rounded-xl shadow-lg">
              <Car className="h-6 w-6 text-white animate-bounce-slow" />
            </div>
            <span className="font-bold text-xl text-gray-800 tracking-wide">TaxiLux</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <nav className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Language Selector & Auth */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full shadow-inner hover:shadow-md transition-shadow duration-300">
                <Globe className="h-4 w-4 text-gray-600" />
                <select
                  value={currentLanguage}
                  onChange={(e) => setCurrentLanguage(e.target.value)}
                  className="text-sm text-gray-700 bg-transparent border-none focus:outline-none cursor-pointer"
                >
                  <option value="NL">Nederlands</option>
                  <option value="EN">English</option>
                </select>
              </div>

              <Button variant="outline" className="flex items-center text-gray-700 border-gray-300 hover:bg-gray-100">
                <User className="h-4 w-4 mr-2" />
                Log in
              </Button>

              {/* Download App Button with gray-900 */}
              <Button className="flex items-center bg-gray-900 hover:bg-gray-800 text-white font-semibold shadow-lg">
                <Download className="h-4 w-4 mr-2" />
                Download App
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-5 border-t border-gray-200 bg-white shadow-lg animate-slide-down">
            <nav className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <div className="pt-4 border-t border-gray-200 space-y-3">
                <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-full shadow-inner">
                  <Globe className="h-4 w-4 text-gray-600" />
                  <select
                    value={currentLanguage}
                    onChange={(e) => setCurrentLanguage(e.target.value)}
                    className="text-sm text-gray-700 bg-transparent border border-gray-300 rounded px-2 py-1 w-full"
                  >
                    <option value="NL">Nederlands</option>
                    <option value="EN">English</option>
                  </select>
                </div>
                <Button variant="outline" className="w-full text-gray-700 border-gray-300 hover:bg-gray-100">
                  <User className="h-4 w-4 mr-2" />
                  Log in
                </Button>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold shadow-lg flex items-center justify-center">
                  <Download className="h-4 w-4 mr-2" />
                  Download App
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
