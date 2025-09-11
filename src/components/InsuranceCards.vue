<template>
  <section class="relative -mt-20 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Motor Insurance -->
      <div class="bg-black bg-opacity-90 rounded-lg p-6 text-white hover:bg-opacity-100 transition-all cursor-pointer group">
        <div class="mb-4">
          <img src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=400" 
               alt="Motor Insurance" 
               class="w-full h-32 object-cover rounded-lg">
        </div>
        <h3 class="text-lg font-semibold mb-2">Motor Insurance</h3>
        <p class="text-sm text-gray-300 mb-4">Health Insurance provides comprehensive coverage for medical expenses</p>
        <button class="flex items-center text-red-400 hover:text-red-300 transition-colors">
          <span class="mr-2">Learn More</span>
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/>
          </svg>
        </button>
      </div>

      <!-- Travel Insurance -->
      <div class="bg-black bg-opacity-90 rounded-lg p-6 text-white hover:bg-opacity-100 transition-all cursor-pointer group">
        <div class="mb-4">
          <img src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=400" 
               alt="Travel Insurance" 
               class="w-full h-32 object-cover rounded-lg">
        </div>
        <h3 class="text-lg font-semibold mb-2">Travel Insurance</h3>
        <p class="text-sm text-gray-300 mb-4">Health Insurance provides comprehensive coverage for medical expenses</p>
        <button class="flex items-center text-red-400 hover:text-red-300 transition-colors">
          <span class="mr-2">Learn More</span>
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/>
          </svg>
        </button>
      </div>

      <!-- Marine Insurance -->
      <div class="bg-black bg-opacity-90 rounded-lg p-6 text-white hover:bg-opacity-100 transition-all cursor-pointer group">
        <div class="mb-4">
          <img src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400" 
               alt="Marine Insurance" 
               class="w-full h-32 object-cover rounded-lg">
        </div>
        <h3 class="text-lg font-semibold mb-2">Marine Insurance</h3>
        <p class="text-sm text-gray-300 mb-4">Health Insurance provides comprehensive coverage for medical expenses</p>
        <button class="flex items-center text-red-400 hover:text-red-300 transition-colors">
          <span class="mr-2">Learn More</span>
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/>
          </svg>
        </button>
      </div>

      <!-- Health Insurance -->
      <div class="bg-black bg-opacity-90 rounded-lg p-6 text-white hover:bg-opacity-100 transition-all cursor-pointer group">
        <div class="mb-4">
          <img src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=400" 
               alt="Health Insurance" 
               class="w-full h-32 object-cover rounded-lg">
        </div>
        <h3 class="text-lg font-semibold mb-2">Health Insurance</h3>
        <p class="text-sm text-gray-300 mb-4">Health Insurance provides comprehensive coverage for medical expenses</p>
        <button class="flex items-center text-red-400 hover:text-red-300 transition-colors">
          <span class="mr-2">Learn More</span>
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Navigation arrows -->
    <div class="flex justify-center mt-8 space-x-4">
      <button class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
        <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"/>
        </svg>
      </button>
      <button class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
        <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'InsuranceCards'
}
</script>