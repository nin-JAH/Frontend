import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white mt-14 py-4 px-4">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0 mb-6">
          
          {/* Logo and Social Media Section */}
          <div className="flex flex-col items-start space-y-16 lg:space-y-16">
            {/* Logo */}
            <img 
              src="/images/img_footer_logo.png" 
              alt="Acentria Global Consulting Footer Logo" 
              className="w-[180px] sm:w-[200px] lg:w-[240px] h-auto"
            />
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
                <img 
                  src="/images/img_mingcute_facebook_fill.svg" 
                  alt="Facebook" 
                  className="w-6 h-6"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                <img 
                  src="/images/img_line_md_instagram.svg" 
                  alt="Instagram" 
                  className="w-6 h-6"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Twitter">
                <img 
                  src="/images/img_fa6_brands_square_x_twitter.svg" 
                  alt="Twitter" 
                  className="w-[22px] h-[22px]"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                <img 
                  src="/images/img_ion_logo_linkedin.svg" 
                  alt="LinkedIn" 
                  className="w-6 h-6"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="TikTok">
                <img 
                  src="/images/img_mage_tiktok_circle.svg" 
                  alt="TikTok" 
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col lg:flex-row justify-center items-start w-full lg:w-[68%] space-y-8 lg:space-y-0 lg:space-x-8">
            
            {/* Useful Links */}
            <div className="flex flex-col space-y-3 w-full lg:w-[52%]">
              <h3 className="text-xl font-bold font-['Inter'] text-white mb-2">Useful Links</h3>
              <ul className="space-y-7 ml-1">
                <li>
                  <a href="/" className="text-white hover:text-red-400 transition-colors text-[15px] font-semibold font-['Inter']">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-red-400 transition-colors text-[15px] font-semibold font-['Inter']">
                    Become Our Agent
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-red-400 transition-colors text-[15px] font-semibold font-['Inter']">
                    Access Account
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-red-400 transition-colors text-[15px] font-semibold font-['Inter']">
                    Technical Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-red-400 transition-colors text-[15px] font-semibold font-['Inter']">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="flex flex-col space-y-3 w-full lg:w-[46%]">
              <h3 className="text-xl font-bold font-['Inter'] text-white mb-2 ml-1">Services</h3>
              <ul className="space-y-7">
                <li>
                  <a href="#" className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors">
                    <img 
                      src="/images/img_vector_red_900_18x14.svg" 
                      alt="Insurance icon" 
                      className="w-[14px] h-[18px]"
                    />
                    <span className="text-[15px] font-semibold font-['Inter']">Insurance</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors">
                    <img 
                      src="/images/img_group.svg" 
                      alt="Reinsurance icon" 
                      className="w-[14px] h-[14px]"
                    />
                    <span className="text-[15px] font-semibold font-['Inter']">Reinsurance</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors">
                    <img 
                      src="/images/img_group_red_900.svg" 
                      alt="Product Management icon" 
                      className="w-[14px] h-[14px]"
                    />
                    <span className="text-[15px] font-semibold font-['Inter']">Product Management</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors">
                    <img 
                      src="/images/img_vector_red_900_20x20.svg" 
                      alt="Technology icon" 
                      className="w-5 h-5"
                    />
                    <span className="text-[15px] font-semibold font-['Inter']">Technology</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors">
                    <img 
                      src="/images/img_vector_18x14.svg" 
                      alt="Investment icon" 
                      className="w-[14px] h-[18px]"
                    />
                    <span className="text-[15px] font-semibold font-['Inter']">Investment</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col space-y-3 w-full lg:w-[30%]">
            <h3 className="text-xl font-bold font-['Inter'] text-white mb-2 ml-6 lg:ml-7">Contact Us</h3>
            <ul className="space-y-7">
              <li>
                <a href="tel:+254705200222" className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors">
                  <img 
                    src="/images/img_vector_red_900_18x18.svg" 
                    alt="Phone icon" 
                    className="w-[18px] h-[18px]"
                  />
                  <span className="text-[15px] font-semibold font-['Inter']">+254 705 200 222</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@acesure.com" className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors">
                  <img 
                    src="/images/img_ic_round_email.svg" 
                    alt="Email icon" 
                    className="w-6 h-6"
                  />
                  <span className="text-[15px] font-semibold font-['Inter']">info@acesure.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center space-x-3 text-white ml-1">
                  <img 
                    src="/images/img_vector_red_900_20x14.svg" 
                    alt="Address icon" 
                    className="w-[14px] h-5"
                  />
                  <span className="text-[15px] font-semibold font-['Inter']">P.O.Box 5864-00100 Nairobi</span>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-2 text-white ml-1">
                  <img 
                    src="/images/img_vector_red_900_20x16.svg" 
                    alt="Location icon" 
                    className="w-4 h-5"
                  />
                  <span className="text-[15px] font-semibold font-['Inter']">West Park Towers,Westlands</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-[2px] bg-[#ed1e26] my-4"></div>

        {/* Copyright Section */}
        <div className="text-center space-y-3">
          <p className="text-[15px] font-medium font-['Poppins'] text-white">
            @ Copyright 2025 Acensure. All Rights Reserved
          </p>
          <p className="text-[15px] font-medium font-['Poppins'] text-white">
            Powered by Acensure Technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;