import React from 'react';

const PartnersSection = () => {
  const partners = [
    {
      id: 1,
      src: "/images/img_cic_group_logo.png",
      alt: "CIC Group Logo",
      width: "92px",
      height: "74px"
    },
    {
      id: 2,
      src: "/images/img_logo_removebg_preview.png",
      alt: "Britam Logo",
      width: "96px",
      height: "36px"
    },
    {
      id: 3,
      src: "/images/img_cic_group_logo.png",
      alt: "CIC Group Logo",
      width: "92px",
      height: "74px"
    },
    {
      id: 4,
      src: "/images/img_logo_removebg_preview.png",
      alt: "Britam Logo",
      width: "96px",
      height: "36px"
    },
    {
      id: 5,
      src: "/images/img_cic_group_logo.png",
      alt: "CIC Group Logo",
      width: "92px",
      height: "74px"
    },
    {
      id: 6,
      src: "/images/img_logo_removebg_preview.png",
      alt: "Britam Logo",
      width: "96px",
      height: "36px"
    }
  ];

  return (
    <section className="w-full py-12 sm:py-16 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Partners Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-24">
          {partners?.map((partner, index) => (
            <div 
              key={partner?.id}
              className={`flex items-center justify-center ${
                partner?.height === "36px" ? "py-4 sm:py-5" : ""
              }`}
            >
              <img 
                src={partner?.src}
                alt={partner?.alt}
                className={`w-[${partner?.width}] h-[${partner?.height}] object-contain hover:opacity-80 transition-opacity`}
                style={{
                  width: partner?.width,
                  height: partner?.height
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;