
import React, { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    quote: "Working with this team was a game-changer for our business. Their attention to detail and commitment to quality is unparalleled. The final product exceeded all our expectations.",
    name: "Jane Doe",
    role: "CEO, Future Forward Inc.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    quote: "The level of professionalism and technical expertise is simply amazing. They delivered a fast, responsive, and beautiful website that our users love. Highly recommended!",
    name: "John Smith",
    role: "CTO, Tech Solutions",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    quote: "From the initial concept to the final launch, the communication was seamless and transparent. They truly understood our vision and brought it to life.",
    name: "Emily White",
    role: "Marketing Director, Creative Co.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    quote: "An incredible partner to work with. They are not just developers; they are problem solvers who consistently go the extra mile to ensure project success.",
    name: "Michael Brown",
    role: "Product Manager, Future-Proof LLC",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-neutral-100 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Real stories from satisfied partners.
          </p>
        </div>
        <div className="mt-12 relative">
          <div className="overflow-hidden relative h-64 sm:h-56 md:h-48">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <p className="text-xl italic text-neutral-300">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-6 flex items-center">
                    <img className="h-12 w-12 rounded-full" src={testimonial.avatar} alt={testimonial.name} />
                    <div className="ml-4 text-left">
                      <p className="font-bold text-neutral-100">{testimonial.name}</p>
                      <p className="text-sm text-neutral-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Carousel Controls */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-0 sm:-left-12 transform -translate-y-1/2 bg-neutral-800/50 hover:bg-neutral-700 p-2 rounded-full text-neutral-300 shadow-md focus:outline-none"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-0 sm:-right-12 transform -translate-y-1/2 bg-neutral-800/50 hover:bg-neutral-700 p-2 rounded-full text-neutral-300 shadow-md focus:outline-none"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>

          {/* Dots */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentIndex === index ? 'bg-accent' : 'bg-neutral-600 hover:bg-neutral-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;