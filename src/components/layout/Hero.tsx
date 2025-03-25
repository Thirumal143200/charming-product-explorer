
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient -z-10"></div>
      
      {/* Content container */}
      <div className="max-w-7xl mx-auto w-full text-center">
        {/* Small pre-heading */}
        <div 
          className={`inline-block mb-4 px-3 py-1 rounded-full bg-black/5 text-xs font-medium tracking-wide uppercase text-black/70 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '200ms' }}
        >
          Introducing the new collection
        </div>
        
        {/* Heading */}
        <h1 
          className={`text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-tight mb-6 max-w-4xl mx-auto transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '300ms' }}
        >
          Beautifully crafted objects for your everyday life
        </h1>
        
        {/* Subtitle */}
        <p 
          className={`text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '400ms' }}
        >
          Minimal design meets exceptional functionality. Discover products that blend seamlessly into your lifestyle while elevating your everyday experiences.
        </p>
        
        {/* CTA buttons */}
        <div 
          className={`flex flex-col sm:flex-row justify-center items-center gap-4 mb-16 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '500ms' }}
        >
          <Button className="rounded-full px-8 py-6 h-auto text-base transition-all duration-300 hover:shadow-button">
            Explore Collection
          </Button>
          <Button variant="outline" className="rounded-full px-8 py-6 h-auto text-base">
            Learn More
          </Button>
        </div>
        
        {/* Featured product image */}
        <div 
          className={`relative max-w-3xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="relative aspect-video md:aspect-[16/9] overflow-hidden rounded-xl shadow-card bg-gradient-to-b from-gray-100 to-white p-6">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&auto=format&fit=crop&w=2301&q=80')] bg-cover bg-center bg-no-repeat opacity-95 rounded-xl"></div>
          </div>
          
          {/* Product info badge */}
          <div className="absolute -bottom-5 right-10 glass-effect px-6 py-3 rounded-lg flex items-center">
            <span className="text-sm font-medium">Premium Headphones</span>
            <div className="h-4 w-px bg-gray-300 mx-3"></div>
            <span className="text-sm font-medium">$299</span>
          </div>
        </div>
      </div>
      
      {/* Down arrow */}
      <a
        href="#products"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center animate-hover-bounce"
        aria-label="Scroll to products"
      >
        <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center mb-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
        <span className="text-xs font-medium text-gray-500">Scroll</span>
      </a>
    </section>
  );
}

export default Hero;
