import React from 'react';
import { Helmet } from 'react-helmet';

import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import QuoteSection from './QuoteSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import AgentSection from './AgentSection';
import ContactSection from './ContactSection';
import PartnersSection from './PartnersSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Strategic Risk Management & Actuarial Services | Acentria Global Consulting</title>
        <meta 
          name="description" 
          content="Acentria Global Consulting empowers organizations with strategic risk management, insurance consulting, and actuarial services. 200,000+ successful outcomes, 150,000+ managed bots. Partner with us today." 
        />
        <meta property="og:title" content="Strategic Risk Management & Actuarial Services | Acentria Global Consulting" />
        <meta property="og:description" content="Acentria Global Consulting empowers organizations with strategic risk management, insurance consulting, and actuarial services. 200,000+ successful outcomes, 150,000+ managed bots. Partner with us today." />
      </Helmet>

      <main>
        <HeroSection />
        <QuoteSection />
        <AboutSection />
        <ServicesSection />
        <AgentSection />
        <ContactSection />
        <PartnersSection />
        <Footer />
      </main>
    </>
  );
};

export default Home;