import React from 'react';

const services = [
  {
    id: 1,
    title: "Local Taxi Transport",
    description: "Order a taxi anywhere in the Netherlands. Immediate or pre-booked rides available.",
    icon: "🚕",
    link: "Our most popular taxi companies"
  },
  {
    id: 2,
    title: "Airport Taxi",
    description: "Travel to/from airports in the Netherlands, Germany, and Belgium. Flight monitoring included.",
    icon: "✈️",
    link: "Our most popular airport taxis"
  },
  {
    id: 3,
    title: "Healthcare Transport",
    description: "Tailor-made care transport for those unable to travel themselves. Hospitals, nursing homes, rehab centers.",
    icon: "🏥",
    link: "Our types of care transport"
  },
  {
    id: 4,
    title: "Business Transport",
    description: "Ideal for business taxi rides. Companies can easily order rides on account.",
    icon: "💼",
    link: "View our business transport"
  },
  {
    id: 5,
    title: "Rides to Popular Locations",
    description: "Travel comfortably to amusement parks, zoos, theaters, or stadiums.",
    icon: "🎢",
    link: "Popular locations"
  },
  {
    id: 6,
    title: "Event Transportation",
    description: "Transport to parties, festivals, or events safely and conveniently.",
    icon: "🎉",
    link: "Popular event transportation"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Book a taxi anywhere in the Netherlands, Germany, and Belgium. Experience safe, reliable, and luxurious rides.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              {/* Icon */}
              <div className="h-32 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 transition-colors duration-300">
                <span className="text-6xl" role="img" aria-label={service.title}>
                  {service.icon}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <button 
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group-hover:translate-x-1 transform duration-200"
                  onClick={() => console.log(`Learn more about ${service.title}`)}
                  aria-label={`Learn more about ${service.title}`}
                >
                  {service.link} 
                  <span className="ml-2" aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
