<template>
  <div class="home">
    <HeroSection />
    <InsuranceCards />
    <AboutSection />
    <ServicesSection />
    <StatsSection />
    <AgentSection />
    <ContactSection />
    <PartnersSection />
    <Footer />
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue'
import InsuranceCards from '@/components/InsuranceCards.vue'
import AboutSection from '@/components/AboutSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import StatsSection from '@/components/StatsSection.vue'
import AgentSection from '@/components/AgentSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import PartnersSection from '@/components/PartnersSection.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    HeroSection,
    InsuranceCards,
    AboutSection,
    ServicesSection,
    StatsSection,
    AgentSection,
    ContactSection,
    PartnersSection,
    Footer
  }
}
</script>