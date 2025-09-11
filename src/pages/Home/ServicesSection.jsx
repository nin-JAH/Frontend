import React, { useState } from 'react';

const ServicesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      id: 1,
      title: "Risk & Insurance Consulting",
      image: "/images/img_rectangle_76.png",
      link: "#"
    },
    {
      id: 2,
      title: "Reinsurance Solutions",
      image: "/images/img_rectangle_77.png",
      link: "#"
    },
    {
      id: 3,
      title: "Actuarial Services",
      image: "/images/img_rectangle_78.png",
      link: "#"
    }
  ];

  return (
    <section className="w-full py-12 sm:py-16 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold font-['Inter'] leading-tight text-black mb-2">
            Our Core Services
          </h2>
          <div className="w-[38px] h-[1px] bg-black mx-auto">
            <img 
              src="/images/img_vector_20.svg" 
              alt="underline" 
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Services Slider */}
        <div className="relative">
          {/* Desktop View - Show all 3 cards */}
          <div className="hidden lg:flex items-center justify-center space-x-9">
            {services?.map((service, index) => (
              <div key={service?.id} className="relative w-[336px] h-[326px] group cursor-pointer">
                {/* Service Image */}
                <img 
                  src={service?.image} 
                  alt={service?.title}
                  className="w-full h-full object-cover rounded-tl-[50px] rounded-tr-none rounded-br-none rounded-bl-none"
                />
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <div className="flex flex-col space-y-4 sm:space-y-6">
                    <h3 className="text-[16px] sm:text-[20px] font-semibold font-['Poppins'] leading-loose text-white drop-shadow-md">
                      {service?.title}
                    </h3>
                    
                    <div className="flex items-center justify-between">
                      <a 
                        href={service?.link}
                        className="text-[13px] sm:text-[15px] font-medium font-['Poppins'] leading-snug text-[#c10c0c] hover:text-[#ed1e26] transition-colors"
                      >
                        Read more
                      </a>
                      <img 
                        src="/images/img_vector_red_900.svg" 
                        alt="arrow right" 
                        className="w-3 h-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet View - Show 1 card at a time */}
          <div className="lg:hidden">
            <div className="relative w-full max-w-[336px] h-[326px] mx-auto group cursor-pointer">
              {/* Service Image */}
              <img 
                src={services?.[currentSlide]?.image} 
                alt={services?.[currentSlide]?.title}
                className="w-full h-full object-cover rounded-tl-[50px] rounded-tr-none rounded-br-none rounded-bl-none"
              />
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <div className="flex flex-col space-y-4 sm:space-y-6">
                  <h3 className="text-[16px] sm:text-[20px] font-semibold font-['Poppins'] leading-loose text-white drop-shadow-md">
                    {services?.[currentSlide]?.title}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <a 
                      href={services?.[currentSlide]?.link}
                      className="text-[13px] sm:text-[15px] font-medium font-['Poppins'] leading-snug text-[#c10c0c] hover:text-[#ed1e26] transition-colors"
                    >
                      Read more
                    </a>
                    <img 
                      src="/images/img_vector_red_900.svg" 
                      alt="arrow right" 
                      className="w-3 h-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center space-x-3 sm:space-x-5 mt-8 sm:mt-12">
          {[0, 1, 2, 3]?.map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index % services?.length)}
              className={`h-[10px] rounded-[5px] transition-all duration-300 ${
                index === 0 
                  ? 'w-[70px] bg-[#c10c0c]' 
                  : 'w-[70px] bg-[#b7b7b98c] hover:bg-[#c10c0c]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;