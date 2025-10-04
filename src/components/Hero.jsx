import React, { useState, useEffect } from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Calendar, Phone, Shield, Users, Star, Briefcase, X, Wind } from 'lucide-react'

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isReturn, setIsReturn] = useState(false)
  const [stops, setStops] = useState([])
  const [bookingData, setBookingData] = useState({
    pickup: '',
    destination: '',
    passengers: 1,
    vehicleType: 'Sedan (1-4)',
    acType: 'AC',
    luggage: 'No Luggage',
    pickupDate: '',
    pickupTime: '',
    returnDate: '',
    returnTime: ''
  })

  const backgroundImages = [
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const getVehicleByPassengers = (num) => {
    if (num <= 4) return 'Sedan (1-4)'
    if (num <= 6) return 'SUV (1-6)'
    if (num <= 8) return 'Minibus (1-8)'
    return 'Luxury'
  }

  const handleBooking = () => {
    const { pickup, destination, passengers, pickupDate, pickupTime } = bookingData
    if (!pickup || !destination || !passengers || !pickupDate || !pickupTime) {
      alert('Please fill in all required fields')
      return
    }

    const pickupDT = `${pickupDate} ${pickupTime}`
    const returnDT = isReturn ? `${bookingData.returnDate} ${bookingData.returnTime}` : ''

    alert(
      `Taxi booked successfully!
Passengers: ${passengers}
From: ${pickup}
Stops: ${stops.join(', ')}
To: ${destination}
Pickup: ${pickupDT}
${isReturn ? `Return: ${returnDT}\n` : ''}
Vehicle: ${bookingData.vehicleType} (${bookingData.acType})
Luggage: ${bookingData.luggage}`
    )
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setBookingData((prev) => {
      if (name === 'passengers') {
        if (value === '') return { ...prev, passengers: '' }
        const num = Math.max(1, Math.min(16, Number(value)))
        const autoVehicle = getVehicleByPassengers(num)
        const currentCap = getVehicleByPassengers(prev.passengers || 1)
        return {
          ...prev,
          passengers: num,
          vehicleType:
            prev.vehicleType === currentCap || prev.passengers === ''
              ? autoVehicle
              : prev.vehicleType
        }
      }
      if (name === 'vehicleType') {
        const currentNum = Number(prev.passengers)
        const requiredVehicle = getVehicleByPassengers(currentNum || 1)
        const vehicles = ['Sedan (1-4)', 'SUV (1-6)', 'Minibus (1-8)', 'Luxury']
        if (vehicles.indexOf(value) < vehicles.indexOf(requiredVehicle)) {
          alert(`You cannot select a smaller vehicle for ${currentNum} passengers.`)
          return prev
        }
      }
      return { ...prev, [name]: value }
    })
  }

  const addStop = () => setStops([...stops, ''])
  const removeStop = (i) => setStops(stops.filter((_, index) => index !== i))
  const handleStopChange = (i, value) => {
    const updated = [...stops]
    updated[i] = value
    setStops(updated)
  }

  return (
    <section
      className="min-h-screen relative bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('${backgroundImages[currentImageIndex]}')`
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-screen items-center py-10">

          {/* LEFT CONTENT */}
          <div className="text-white space-y-6 py-8">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Premium Taxi <span className="block text-yellow-400">Service</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-200">
              Reliable, Safe & Comfortable rides across the Netherlands
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="flex justify-center lg:justify-end">
            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl max-w-xl mt-12 w-full">
              <CardContent className="p-4 space-y-4">

                <div className="text-center">
                  <h1 className="text-2xl font-bold text-gray-900">Book Your Reliable Vehicle</h1>
                  
                </div>

                {/* PASSENGERS, VEHICLE, AC */}
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Passengers</label>
                    <input
                      type="number"
                      name="passengers"
                      min="1"
                      max="16"
                      value={bookingData.passengers}
                      onChange={handleChange}
                      className="w-full px-2 py-1 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Vehicle</label>
                    <select
                      name="vehicleType"
                      value={bookingData.vehicleType}
                      onChange={handleChange}
                      className="w-full px-2 py-1 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option>Sedan (1-4)</option>
                      <option>SUV (1-6)</option>
                      <option>Minibus (1-8)</option>
                      <option>Luxury</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Vehicle Type</label>
                   <select
                      name="vehicleType"
                      value={bookingData.vehicleType}
                      onChange={handleChange}
                      className="w-full px-2 py-1 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option>Ac</option>
                      <option>Non-Ac</option>
                      <option>Luxery</option>
                    </select>
                  </div>
                </div>

                {/* JOURNEY */}
                <div className="space-y-3 pt-2 border-t border-gray-200">
                  <label className="block text-xs font-medium text-gray-700 ">Pickup</label>
                  <input
                    type="text"
                    name="pickup"
                    placeholder="Pickup address"
                    value={bookingData.pickup}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                  />
                  <button onClick={addStop} className="text-xs text-blue-600 mt-1">+ Add Stop</button>

                  {stops.map((stop, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <input
                        type="text"
                        placeholder={`Stop ${i + 1}`}
                        value={stop}
                        onChange={(e) => handleStopChange(i, e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                      <button onClick={() => removeStop(i)} className="text-red-500">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}

                  <label className="block text-xs font-medium text-gray-700 ">Destination</label>
                  <input
                    type="text"
                    name="destination"
                    placeholder="Destination address"
                    value={bookingData.destination}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg"
                  />

                  {/* Pickup Date & Time */}
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Pickup Date</label>
                      <input
                        type="date"
                        value={bookingData.pickupDate}
                        onChange={(e) => setBookingData(prev => ({ ...prev, pickupDate: e.target.value }))}
                        className="w-full px-2 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Pickup Time</label>
                      <input
                        type="time"
                        value={bookingData.pickupTime}
                        onChange={(e) => setBookingData(prev => ({ ...prev, pickupTime: e.target.value }))}
                        className="w-full px-2 py-2 text-sm border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Return Trip */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={isReturn}
                      onChange={() => setIsReturn(!isReturn)}
                    />
                    <label className="text-sm text-gray-700">Return Trip</label>
                  </div>

                  {isReturn && (
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Return Date</label>
                        <input
                          type="date"
                          value={bookingData.returnDate}
                          onChange={(e) => setBookingData(prev => ({ ...prev, returnDate: e.target.value }))}
                          className="w-full px-2 py-2 text-sm border border-gray-300 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Return Time</label>
                        <input
                          type="time"
                          value={bookingData.returnTime}
                          onChange={(e) => setBookingData(prev => ({ ...prev, returnTime: e.target.value }))}
                          className="w-full px-2 py-2 text-sm border border-gray-300 rounded-lg"
                        />
                      </div>
                    </div>
                  )}

                  {/* Luggage */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Luggage</label>
                    <select
                      name="luggage"
                      value={bookingData.luggage}
                      onChange={handleChange}
                      className="w-full px-2 py-2 text-sm border border-gray-300 rounded-lg"
                    >
                      <option>No Luggage</option>
                      <option>Standard</option>
                      <option>Extra</option>
                    </select>
                  </div>

                </div>

                <Button
                  onClick={handleBooking}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base py-3 mt-6"
                >
                  Book Your Taxi Now
                </Button>

                <div className="text-center text-xs text-gray-600 pt-2">
                  <p>Need help? <Phone className="inline h-3 w-3 mx-1 text-blue-600" /> +31 (0)20 123 4567</p>
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
