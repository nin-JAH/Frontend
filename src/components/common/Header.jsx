import React, { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-black">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 lg:py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/images/img_header_logo.png" 
              alt="Acentria Global Consulting Logo" 
              className="w-[100px] sm:w-[120px] lg:w-[134px] h-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-between flex-1 max-w-[30%] ml-8">
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
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Button
              text="Generate a quote"
              className="px-3 py-1.5"
              layout_align_self="auto"
              layout_width="auto"
              padding="px-3 py-1.5"
              margin=""
              position="relative"
              layout_gap="0"
              variant="primary"
              size="medium"
              onClick={() => {}}
            />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-white hover:text-gray-300 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden pb-4 border-t border-gray-700 mt-4 pt-4`}>
          <div className="flex flex-col space-y-4">
            {/* Generate Quote */}
            <div className="flex items-center justify-between text-white hover:text-gray-300 transition-colors cursor-pointer">
              <span className="text-sm font-medium font-['Poppins']">Generate Quote</span>
              <img 
                src="/images/img_vector.svg" 
                alt="dropdown arrow" 
                className="w-[10px] h-[5px]"
              />
            </div>

            {/* Claims */}
            <span className="text-white hover:text-gray-300 transition-colors cursor-pointer text-sm font-medium font-['Poppins'] block">
              Claims
            </span>

            {/* Resources */}
            <div className="flex items-center justify-between text-white hover:text-gray-300 transition-colors cursor-pointer">
              <span className="text-sm font-medium font-['Poppins']">Resources</span>
              <img 
                src="/images/img_vector.svg" 
                alt="dropdown arrow" 
                className="w-[10px] h-[5px]"
              />
            </div>

            {/* Mobile CTA Button */}
            <div className="pt-2">
              <Button
                text="Generate a quote"
                className="w-full px-3 py-2"
                layout_align_self="auto"
                layout_width="100%"
                padding="px-3 py-2"
                margin=""
                position="relative"
                layout_gap="0"
                variant="primary"
                size="medium"
                onClick={() => {}}
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;