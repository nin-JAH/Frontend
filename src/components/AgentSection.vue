<template>
  <section class="py-20 bg-gradient-to-r from-red-50 to-pink-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="space-y-6">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">
            BECOME AN AGENT WITH ACENTRIA
          </h2>
          <p class="text-gray-700 leading-relaxed">
            Join our network of industry experts and unlock new opportunities in risk management, insurance, and financial consulting. Partner with us to grow your career, expand your reach, and deliver innovative solutions to clients worldwide.
          </p>
          <button class="bg-white border-2 border-red-600 text-red-600 px-8 py-3 rounded-md hover:bg-red-600 hover:text-white transition-all font-semibold">
            Apply Now
          </button>
        </div>

        <!-- Image -->
        <div class="relative">
          <div class="bg-red-100 rounded-3xl p-6">
            <img src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600" 
                 alt="Professional agent" 
                 class="w-full h-64 object-cover rounded-2xl">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AgentSection'
}
</script>