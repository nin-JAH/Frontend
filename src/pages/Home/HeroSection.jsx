import React from 'react';
import Button from '../../components/ui/Button';

const HeroSection = () => {
  return (
    <section 
      className="w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[856px] bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/images/img_rectangle_2.png')" }}
    >
      {/* Login Button - Top Right */}
      <div className="absolute top-4 right-4 sm:right-6 lg:right-7 z-10">
        <Button
          text="Login"
          text_font_size="10"
          text_font_family="Poppins"
          text_font_weight="500"
          text_line_height="15px"
          text_color="#c10c0c"
          fill_background_color="#ffffff"
          border_border="1 solid #c10c0c"
          border_border_radius="12px"
          padding="4px 28px"
          className="text-xs sm:text-sm"
          layout_align_self=""
          layout_width=""
          margin=""
          position=""
          layout_gap=""
          variant=""
          size=""
          onClick={() => {}}
        />
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-14">
        {/* Header Component would go here */}
        <div className="flex justify-between items-center mb-16 sm:mb-20 lg:mb-32">
          {/* Logo */}
          <img 
            src="/images/img_header_logo.png" 
            alt="Acentria Global Consulting Logo" 
            className="w-[100px] sm:w-[120px] lg:w-[134px] h-auto"
          />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between flex-1 max-w-[30%] ml-8">
            <div className="flex items-center space-x-8">
              {/* Generate Quote Dropdown */}
              <div className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors cursor-pointer">
                <span className="text-sm font-medium font-['Poppins']">Generate Quote</span>
                <img 
                  src="/images/img_vector.svg" 
                  alt="dropdown arrow" 
                  className="w-[10px] h-[5px]"
                />
              </div>

              {/* Claims */}
              <span className="text-white hover:text-gray-300 transition-colors cursor-pointer text-sm font-medium font-['Poppins']">
                Claims
              </span>
            </div>

            {/* Resources Dropdown */}
            <div className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors cursor-pointer">
              <span className="text-sm font-medium font-['Poppins']">Resources</span>
              <img 
                src="/images/img_vector.svg" 
                alt="dropdown arrow" 
                className="w-[10px] h-[5px]"
              />
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Button
              text="Generate a quote"
              text_font_size="14"
              text_font_family="Poppins"
              text_font_weight="700"
              text_line_height="21px"
              text_color="#ffffff"
              fill_background_color="#d9d9d960"
              border_border="1 solid #ffffff"
              border_border_radius="5px"
              padding="6px 12px"
              layout_align_self=""
              layout_width=""
              margin=""
              position=""
              layout_gap=""
              variant=""
              size=""
              onClick={() => {}}
              className=""
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="flex flex-col items-start space-y-5 sm:space-y-6 lg:space-y-8 max-w-[54%] mb-16 sm:mb-20 lg:mb-32">
          <h1 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold font-['Poppins'] leading-tight text-white">
            Your Trusted Global Consulting Partner
          </h1>
          
          <p className="text-[14px] sm:text-[16px] lg:text-[20px] font-semibold font-['Poppins'] leading-relaxed text-[#ffffffbc] max-w-full">
            Acensure is committed to empowering organizations with strategies that inspire confidence and drive growth. Whether you are looking to optimize risk management, enhance financial performance, or embrace digital transformation, we are here to guide you every step of the way.
          </p>

          <Button
            text="Generate a quote"
            text_font_size="14"
            text_font_family="Poppins"
            text_font_weight="700"
            text_line_height="21px"
            text_color="#ffffff"
            fill_background_color="#d9d9d960"
            border_border="1 solid #ffffff"
            border_border_radius="5px"
            padding="6px 12px"
            className="mt-4 sm:mt-6"
            layout_align_self=""
            layout_width=""
            margin=""
            position=""
            layout_gap=""
            variant=""
            size=""
            onClick={() => {}}
          />
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="w-3 h-3 bg-[#d9d9d9] rounded-full"></div>
          <div className="w-3 h-3 bg-[#d9d9d9] rounded-full"></div>
          <div className="w-[38px] h-3 bg-[#c10c0c] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;