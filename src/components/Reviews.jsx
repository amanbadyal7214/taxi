import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Tijmen",
      location: "Culemborg",
      rating: 10,
      title: "Top Service",
      review: "Sunday morning, middle of nowhere... Got a taxi quickly without any problems with a super friendly and very professional driver!"
    },
    {
      id: 2,
      name: "Ruud and Marja",
      location: "Heiloo",
      rating: 9,
      title: "Excellent Experience",
      review: "Both the trips to and from our destination had excellent drivers, who were punctual and drove in a fresh-smelling and beautiful electric car. These were our first taxi rides ever and they were definitely worth repeating."
    },
    {
      id: 3,
      name: "Gaby",
      location: "Spijkenisse",
      rating: 10,
      title: "Friendly Driver",
      review: "Contacted via phone and WhatsApp, quickly found the taxi through live location. Driver was nice and we had a pleasant ride!"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rating Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-white rounded-full px-8 py-4 shadow-md mb-6">
            <div className="flex items-center space-x-4">
              <div className="text-3xl font-bold text-gray-900">9.3</div>
              <div className="flex flex-col items-start">
                <div className="flex items-center space-x-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-blue-400" />
                  ))}
                </div>
                <div className="text-sm text-gray-500">Highest traveler appreciation in the Netherlands</div>
              </div>
            </div>
          </div>
          <div className="text-gray-500 text-sm">
            <span className="font-medium">10,000+</span> customer ratings on 
            <span className="inline-flex items-center ml-2">
              <img src="https://via.placeholder.com/80x30" alt="Kiyoh Logo" className="h-5" />
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-700 font-semibold text-lg">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{review.name}</div>
                      <div className="text-sm text-gray-500">{review.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="text-lg font-bold text-gray-900">{review.rating}</div>
                    <Star className="h-4 w-4 text-blue-400" />
                  </div>
                </div>

                {/* Review Content */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{review.title}</h4>
                  <Quote className="h-4 w-4 text-gray-300 mb-2" />
                  <p className="text-gray-600 text-sm italic leading-relaxed">
                    "{review.review}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors"
          >
            See all reviews on Kiyoh.nl
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
