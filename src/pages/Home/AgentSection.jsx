import React from 'react';
import Button from '../../components/ui/Button';

const AgentSection = () => {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-24">
      <div className="w-full bg-gradient-to-r from-[#c10c0c0c] to-[#ff9a9a0c] py-12 sm:py-16 lg:py-20">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
            
            {/* Content */}
            <div className="w-full lg:w-[64%] space-y-6 lg:space-y-8">
              <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold font-['Inter'] leading-loose text-black">
                BECOME AN AGENT WITH ACENTRIA
              </h2>
              
              <p className="text-[10px] font-medium font-['Poppins'] leading-snug text-black">
                Join our network of industry experts and unlock new opportunities in risk management, insurance, and financial consulting. Partner with us to grow your career, expand your reach, and deliver innovative solutions to clients worldwide.
              </p>

              <Button
                text="Apply Now"
                text_font_size="10"
                text_font_family="Poppins"
                text_font_weight="500"
                text_line_height="15px"
                text_color="#000000"
                fill_background_color="#ffffff"
                border_border="1 solid #ed1e26"
                border_border_radius="5px"
                padding="8px 28px"
                className="mt-8 sm:mt-12"
                layout_align_self="flex-start"
                layout_width="auto"
                margin="0"
                position="relative"
                layout_gap="0"
                variant="primary"
                size="medium"
                onClick={() => {}}
              />
            </div>

            {/* Image Stack */}
            <div className="relative w-full lg:w-[26%] h-[150px] sm:h-[180px] lg:h-[200px]">
              {/* Background Shape */}
              <div className="absolute top-0 left-0 w-[78px] h-[80px] bg-[#ff9a9a5b] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-none"></div>
              
              {/* Main Image */}
              <img 
                src="/images/img_rectangle_95.png" 
                alt="Professional agent" 
                className="absolute top-6 left-6 w-full max-w-[256px] h-[120px] sm:h-[140px] lg:h-[176px] object-cover rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-none shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentSection;