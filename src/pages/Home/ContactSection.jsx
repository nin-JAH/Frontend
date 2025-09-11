import React, { useState } from 'react';
import EditText from '../../components/ui/EditText';
import TextArea from '../../components/ui/TextArea';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // Handle form submission
  };

  return (
    <section className="w-full py-12 sm:py-16 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="relative inline-block">
            <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold font-['Inter'] leading-tight text-black mb-2">
              Contact
            </h2>
            <img 
              src="/images/img_vector_20.svg" 
              alt="underline" 
              className="absolute -bottom-1 left-2 w-[38px] h-[1px]"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-12">
          
          {/* Contact Information */}
          <div className="w-full lg:w-[34%] space-y-8 sm:space-y-10">
            
            {/* Address */}
            <div className="flex items-start space-x-4 sm:space-x-6">
              <div className="flex-shrink-0 w-11 h-11 bg-white border border-[#ff9a9a] rounded-[10px] flex items-center justify-center shadow-md">
                <img 
                  src="/images/img_ep_location.svg" 
                  alt="Location icon" 
                  className="w-4 h-4"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-[11px] sm:text-[13px] font-semibold font-['Inter'] leading-tight text-black mb-1">
                  Address
                </h3>
                <p className="text-[9px] sm:text-[10px] font-normal font-['Inter'] leading-tight text-black">
                  West Park Towers,Westlands,Nairobi,Kenya
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4 sm:space-x-6">
              <div className="flex-shrink-0 w-11 h-11 bg-white border border-[#ff9a9a] rounded-[10px] flex items-center justify-center shadow-md">
                <img 
                  src="/images/img_famicons_call_outline.svg" 
                  alt="Phone icon" 
                  className="w-5 h-5"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-[11px] sm:text-[13px] font-semibold font-['Inter'] leading-tight text-black mb-1">
                  Call Us
                </h3>
                <p className="text-[9px] sm:text-[10px] font-normal font-['Inter'] leading-tight text-black">
                  +254 705 200 222
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4 sm:space-x-6">
              <div className="flex-shrink-0 w-11 h-11 bg-white border border-[#ff9a9a] rounded-[10px] flex items-center justify-center shadow-md">
                <img 
                  src="/images/img_material_symbols_mail_outline.svg" 
                  alt="Email icon" 
                  className="w-5 h-5"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-[11px] sm:text-[13px] font-semibold font-['Inter'] leading-tight text-black mb-1">
                  Email Us
                </h3>
                <p className="text-[9px] sm:text-[10px] font-normal font-['Inter'] leading-tight text-black">
                  info@avensure.com
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start space-x-4 sm:space-x-6">
              <div className="flex-shrink-0 w-11 h-11 bg-white border border-[#ff9a9a] rounded-[10px] flex items-center justify-center shadow-md">
                <img 
                  src="/images/img_ion_time_outline.svg" 
                  alt="Time icon" 
                  className="w-5 h-5"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-[11px] sm:text-[13px] font-semibold font-['Inter'] leading-tight text-black mb-1">
                  Open Hours
                </h3>
                <p className="text-[9px] sm:text-[10px] font-normal font-['Inter'] leading-tight text-black">
                  Mon-Sat:8AM-6PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:flex-1 relative">
            <div 
              className="w-full h-[300px] sm:h-[350px] lg:h-[412px] bg-cover bg-center rounded-[10px] relative"
              style={{ backgroundImage: "url('/images/img_rectangle_41.png')" }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-[10px]"></div>
              
              <div className="relative z-10 p-6 sm:p-8 lg:p-12 h-full flex flex-col">
                <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold font-['Poppins'] leading-loose text-white text-center mb-6">
                  Get in Touch
                </h3>

                <form onSubmit={handleSubmit} className="flex-1 space-y-3 sm:space-y-4">
                  {/* Name and Email Row */}
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <EditText
                      placeholder="Your Name"
                      name="name"
                      value={formData?.name}
                      onChange={handleInputChange}
                      className="flex-1"
                      border_border="1px solid #d9d9d9"
                      layout_width="100%"
                      padding="8px 12px"
                      position="relative"
                      margin="0"
                      variant="outlined"
                      size="medium"
                      id="name-input"
                    />
                    <EditText
                      placeholder="Your Email"
                      name="email"
                      type="email"
                      value={formData?.email}
                      onChange={handleInputChange}
                      border_border="1px solid #d9d9d9"
                      className="flex-1"
                      layout_width="100%"
                      padding="8px 12px"
                      position="relative"
                      margin="0"
                      variant="outlined"
                      size="medium"
                      id="email-input"
                    />
                  </div>

                  {/* Subject */}
                  <EditText
                    placeholder="Subject"
                    name="subject"
                    value={formData?.subject}
                    onChange={handleInputChange}
                    border_border="1px solid #d9d9d9"
                    layout_width="100%"
                    padding="8px 12px"
                    position="relative"
                    margin="0"
                    variant="outlined"
                    size="medium"
                    id="subject-input"
                    className="w-full"
                  />

                  {/* Message */}
                  <TextArea
                    placeholder="Message"
                    name="message"
                    value={formData?.message}
                    onChange={handleInputChange}
                    rows={6}
                    cols={50}
                    className="min-h-[120px] sm:min-h-[140px] lg:min-h-[170px]"
                    layout_width="100%"
                    padding="8px 12px"
                    margin="0"
                    position="relative"
                    variant="outlined"
                    size="medium"
                    id="message-textarea"
                  />

                  {/* Submit Button */}
                  <div className="flex justify-end pt-2 sm:pt-3">
                    <button
                      type="submit"
                      className="bg-[#c10c0c] border border-[#b40404] rounded-[18px] px-4 py-2 flex items-center justify-center min-w-[180px] sm:min-w-[222px] hover:bg-[#b40404] transition-colors"
                    >
                      <span className="text-[13px] sm:text-[15px] font-normal font-['Inter'] leading-normal text-white">
                        Send Message
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;