import React from 'react';

const AboutSection = () => {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
          
          {/* Images Stack */}
          <div className="relative w-full lg:w-[44%] h-[300px] sm:h-[400px] lg:h-[570px]">
            {/* Main Image */}
            <img 
              src="/images/img_rectangle_97.png" 
              alt="Business consulting" 
              className="w-full max-w-[520px] h-[250px] sm:h-[350px] lg:h-[466px] object-cover rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px]"
            />
            
            {/* Overlapping Image */}
            <img 
              src="/images/img_rectangle_98.png" 
              alt="Team collaboration" 
              className="absolute bottom-0 right-0 w-[56%] max-w-[308px] h-[150px] sm:h-[200px] lg:h-[260px] object-cover rounded-[20px] shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-[52%] space-y-6 lg:space-y-8">
            <div className="space-y-6 lg:space-y-7">
              <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold font-['Inter'] leading-tight text-black text-center lg:text-left">
                About Us
              </h2>
              
              <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-medium font-['Poppins'] leading-loose text-black">
                Acensure is a global consulting firm dedicated to empowering businesses with strategic solutions in risk management, financial advisory, and technology-driven growth.
                <br /><br />
                Our mission is to help clients navigate the complexities of modern industries by delivering data-driven, innovative, and sustainable strategies that drive business success
              </p>
            </div>

            {/* Divider Line */}
            <div className="w-full h-[1px] bg-[#00000044] my-8 lg:my-12"></div>

            {/* Statistics */}
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0 sm:space-x-8">
              
              {/* First Stat */}
              <div className="flex items-center space-x-8 sm:space-x-12">
                <div className="text-center sm:text-left">
                  <h3 className="text-[18px] sm:text-[20px] font-bold font-['Inter'] leading-tight text-black mb-2">
                    200,000+
                  </h3>
                  <p className="text-[10px] sm:text-[12px] font-normal font-['Inter'] leading-tight text-[#766d6d]">
                    CUSTOMER
                  </p>
                </div>
                
                {/* Vertical Line */}
                <div className="w-[1px] h-[80px] sm:h-[114px] bg-[#c10c0c]"></div>
              </div>

              {/* Second Stat */}
              <div className="text-center sm:text-left">
                <h3 className="text-[18px] sm:text-[20px] font-bold font-['Inter'] leading-tight text-black mb-2">
                  150,000+
                </h3>
                <p className="text-[10px] sm:text-[12px] font-normal font-['Inter'] leading-tight text-[#766d6d]">
                  QUOTE GENERATED
                </p>
              </div>

              {/* Third Stat */}
              <div className="flex items-center space-x-8 sm:space-x-12">
                {/* Vertical Line */}
                <div className="w-[1px] h-[80px] sm:h-[114px] bg-[#c10c0c]"></div>
                
                <div className="text-center sm:text-left">
                  <h3 className="text-[18px] sm:text-[20px] font-bold font-['Inter'] leading-tight text-black mb-2">
                    12+
                  </h3>
                  <p className="text-[10px] sm:text-[12px] font-normal font-['Inter'] leading-tight text-[#766d6d]">
                    YEARS IN BUSINESS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;