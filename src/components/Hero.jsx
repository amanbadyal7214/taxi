import React, { useState, useEffect } from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { MapPin, Clock, Calendar, Phone, Shield, Users, Star, CheckCircle } from 'lucide-react'

const Hero = () => {
  const [bookingData, setBookingData] = useState({
    pickup: '',
    destination: '',
    date: '',
    time: '',
    passengers: '1',
    vehicleType: 'standard'
  })

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const backgroundImages = [
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      )
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleBooking = () => {
    // Simple validation
    if (!bookingData.pickup || !bookingData.destination || !bookingData.date || !bookingData.time) {
      alert('Please fill in all required fields')
      return
    }
    
    alert(`Taxi booked successfully!\nFrom: ${bookingData.pickup}\nTo: ${bookingData.destination}\nDate: ${bookingData.date}\nTime: ${bookingData.time}\nPassengers: ${bookingData.passengers}`)
  }
  return (
    <section 
      className="min-h-screen h-auto lg:h-[120vh] relative bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${backgroundImages[currentImageIndex]}')`
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-screen items-center py-10">
          
          {/* Left Side - Content */}
          <div className="text-white space-y-6 py-8">
            <div className="pt-4">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Premium Taxi
                <span className="block text-yellow-400">Service</span>
              </h1>
              <p className="text-lg lg:text-xl mb-6 text-gray-200">
                Reliable, Safe & Comfortable rides across the Netherlands
              </p>
            </div>

            <div className="space-y-4 py-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500 p-2 rounded-full">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">TX-Keurmerk Certified</h3>
                  <p className="text-sm text-gray-300">National quality mark in taxi industry</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-green-500 p-2 rounded-full">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">5000+ Professional Drivers</h3>
                  <p className="text-sm text-gray-300">Experienced & certified taxi drivers</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-yellow-500 p-2 rounded-full">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">4.8/5 Rating</h3>
                  <p className="text-sm text-gray-300">Highly rated by thousands of customers</p>
                </div>
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 mb-4">
              <h3 className="text-lg font-bold mb-3">Why Choose Us?</h3>
              <ul className="space-y-1 text-sm text-gray-200">
                <li>✓ No hidden charges - transparent pricing</li>
                <li>✓ Free cancellation up to 3 hours before</li>
                <li>✓ Professional drivers with clean vehicles</li>
                <li>✓ Coverage across Netherlands, Germany & Belgium</li>
              </ul>
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div className="flex justify-center lg:justify-end py-8">
            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl max-w-sm w-full">
            <CardContent className="p-8">
              <div className="text-center mb-6 pt-2">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Book Your Taxi</h1>
                <p className="text-sm text-gray-600">Quick and reliable taxi booking</p>
              </div>
              
              {/* Booking Form */}
              <div className="space-y-4 mb-6 py-2">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Pickup Location *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-2 top-2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      name="pickup"
                      value={bookingData.pickup}
                      onChange={handleInputChange}
                      placeholder="Enter pickup address"
                      className="w-full pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Destination *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-2 top-2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      name="destination"
                      value={bookingData.destination}
                      onChange={handleInputChange}
                      placeholder="Enter destination address"
                      className="w-full pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-2 top-2 h-4 w-4 text-gray-400" />
                      <input
                        type="date"
                        name="date"
                        value={bookingData.date}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Time *
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-2 top-2 h-4 w-4 text-gray-400" />
                      <input
                        type="time"
                        name="time"
                        value={bookingData.time}
                        onChange={handleInputChange}
                        className="w-full pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Passengers
                    </label>
                    <select
                      name="passengers"
                      value={bookingData.passengers}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="1">1 Passenger</option>
                      <option value="2">2 Passengers</option>
                      <option value="3">3 Passengers</option>
                      <option value="4">4 Passengers</option>
                      <option value="5">5+ Passengers</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Vehicle Type
                    </label>
                    <select
                      name="vehicleType"
                      value={bookingData.vehicleType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="standard">Standard</option>
                      <option value="luxury">Luxury</option>
                      <option value="electric">Electric</option>
                      <option value="minibus">Minibus (8p)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-4 py-4 pb-2">
                <Button 
                  onClick={handleBooking}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base py-3"
                >
                  Book Your Taxi Now
                </Button>
                
                <div className="text-center pb-2">
                  <p className="text-xs text-gray-600 mb-1">Need immediate assistance?</p>
                  <div className="flex items-center justify-center space-x-1 text-blue-600">
                    <Phone className="h-3 w-3" />
                    <span className="text-xs font-semibold">Call: +31 (0)20 123 4567</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        </div>
      </div>
    </section>
  )
}

export default Hero