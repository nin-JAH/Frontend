<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Core Services</h2>
        <div class="w-16 h-1 bg-red-600 mx-auto"></div>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <!-- Risk & Insurance Consulting -->
        <div class="relative group cursor-pointer">
          <div class="relative h-80 rounded-3xl overflow-hidden">
            <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" 
                 alt="Risk & Insurance Consulting" 
                 class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div class="absolute bottom-6 left-6 right-6">
              <h3 class="text-xl font-semibold text-white mb-3">Risk & Insurance Consulting</h3>
              <div class="flex items-center justify-between">
                <span class="text-red-400 font-medium">Read more</span>
                <svg class="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Reinsurance Solutions -->
        <div class="relative group cursor-pointer">
          <div class="relative h-80 rounded-3xl overflow-hidden">
            <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600" 
                 alt="Reinsurance Solutions" 
                 class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div class="absolute bottom-6 left-6 right-6">
              <h3 class="text-xl font-semibold text-white mb-3">Reinsurance Solutions</h3>
              <div class="flex items-center justify-between">
                <span class="text-red-400 font-medium">Read more</span>
                <svg class="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Actuarial Services -->
        <div class="relative group cursor-pointer">
          <div class="relative h-80 rounded-3xl overflow-hidden">
            <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600" 
                 alt="Actuarial Services" 
                 class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div class="absolute bottom-6 left-6 right-6">
              <h3 class="text-xl font-semibold text-white mb-3">Actuarial Services</h3>
              <div class="flex items-center justify-between">
                <span class="text-red-400 font-medium">Read more</span>
                <svg class="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination dots -->
      <div class="flex justify-center space-x-2">
        <div class="w-16 h-2 bg-red-600 rounded-full"></div>
        <div class="w-16 h-2 bg-gray-300 rounded-full"></div>
        <div class="w-16 h-2 bg-gray-300 rounded-full"></div>
        <div class="w-16 h-2 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection'
}
</script>