import React from 'react';
import { Card, CardContent } from './ui/card';
import { 
  MapPin, 
  Clock, 
  Shield, 
  CreditCard, 
  Star, 
  Smartphone, 
  HeadphonesIcon, 
  TrendingUp,
  Users
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Real-Time GPS Tracking',
      description: 'Track your ride in real-time and share your location with family and friends for added safety.',
      color: 'bg-gradient-to-tr from-blue-400 to-blue-600'
    },
    {
      icon: Clock,
      title: 'Quick Booking',
      description: 'Book your ride in under 30 seconds with our streamlined booking process.',
      color: 'bg-gradient-to-tr from-green-400 to-green-600'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'All drivers are background-checked, licensed, and vehicles are regularly inspected.',
      color: 'bg-gradient-to-tr from-red-400 to-red-600'
    },
    {
      icon: CreditCard,
      title: 'Flexible Payment',
      description: 'Pay with cash, credit cards, or digital wallets. No hidden fees, transparent pricing.',
      color: 'bg-gradient-to-tr from-purple-400 to-purple-600'
    },
    {
      icon: Star,
      title: 'Rated Drivers',
      description: 'All our drivers maintain high ratings and receive regular training for excellent service.',
      color: 'bg-gradient-to-tr from-yellow-400 to-yellow-500'
    },
    {
      icon: Smartphone,
      title: 'Easy-to-Use App',
      description: 'Intuitive mobile app with one-tap booking, ride history, and customer support.',
      color: 'bg-gradient-to-tr from-indigo-400 to-indigo-600'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Happy Customers', icon: Users },
    { number: '99.9%', label: 'Uptime Reliability', icon: TrendingUp },
    { number: '4.8/5', label: 'Average Rating', icon: Star },
    { number: '24/7', label: 'Customer Support', icon: HeadphonesIcon }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Why Choose Taxi?</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Premium features designed for comfort, safety, and convenience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden border-0">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.color} rounded-full mb-4 shadow-md group-hover:scale-105 transition-transform duration-300`}>
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-gray-500 to-gray-700 rounded-2xl p-10 text-center mb-16 shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">Trusted by Thousands</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/25 rounded-full mb-2 shadow-inner">
                    <IconComponent className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-white text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Section */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">How It Works</h3>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            {[ 
              { step: '01', title: 'Book Your Ride', description: 'Enter pickup and destination in our easy-to-use app or website.' },
              { step: '02', title: 'Get Matched', description: 'We instantly connect you with the nearest available driver in your area.' },
              { step: '03', title: 'Enjoy Your Ride', description: 'Sit back and relax while our professional driver takes you to your destination safely.' }
            ].map((process, index) => (
              <div key={index} className="text-center relative">
                {/* Connector line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 z-0"></div>
                )}
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full text-lg font-bold mb-4 shadow-md">
                    {process.step}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{process.title}</h4>
                  <p className="text-sm text-gray-600">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
