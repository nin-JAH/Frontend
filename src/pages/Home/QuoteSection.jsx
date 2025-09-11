import React from 'react';
import Button from '../../components/ui/Button';

const QuoteSection = () => {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 relative -mt-14">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#d9d9d954] border border-[#d9d9d9] rounded-[20px] p-8 sm:p-12 lg:p-16 mx-4 sm:mx-8 lg:mx-60 text-center">
          <h2 className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold font-['Poppins'] leading-loose text-black mb-6 sm:mb-8">
            What Cover Would You Like?
          </h2>
          
          <div className="flex justify-end">
            <Button
              text="Get started"
              text_font_size="16"
              text_font_family="Poppins"
              text_font_weight="700"
              text_line_height="24px"
              text_color="#ffffff"
              fill_background_color="#c10c0c"
              border_border="1 solid #ffffff"
              border_border_radius="5px"
              padding="10px 20px 10px 36px"
              className="flex items-center space-x-4"
              layout_align_self="flex-end"
              layout_width="auto"
              margin="0"
              position="relative"
              layout_gap="16px"
              variant="primary"
              size="medium"
              onClick={() => {}}
            >
              <span>Get started</span>
              <img 
                src="/images/img_vector_white_a700.svg" 
                alt="arrow right" 
                className="w-4 h-3"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;