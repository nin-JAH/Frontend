<template>
  <section class="relative min-h-screen bg-cover bg-center bg-no-repeat" 
           style="background-image: url('/images/img_rectangle_2.png')">
    <!-- Header -->
    <header class="relative z-20 w-full">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-6">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <img src="/images/img_header_logo.png" 
                 alt="Acentria Global Consulting" 
                 class="h-12 w-auto">
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center space-x-8">
            <div class="flex items-center space-x-2 text-white hover:text-red-400 cursor-pointer transition-colors">
              <span class="font-medium">Generate Quote</span>
              <svg class="w-3 h-2" fill="currentColor" viewBox="0 0 10 5">
                <path d="M0 0l5 5 5-5z"/>
              </svg>
            </div>
            <a href="#" class="text-white hover:text-red-400 transition-colors font-medium">Claims</a>
            <div class="flex items-center space-x-2 text-white hover:text-red-400 cursor-pointer transition-colors">
              <span class="font-medium">Resources</span>
              <svg class="w-3 h-2" fill="currentColor" viewBox="0 0 10 5">
                <path d="M0 0l5 5 5-5z"/>
              </svg>
            </div>
            <div class="flex items-center space-x-2 text-white hover:text-red-400 cursor-pointer transition-colors">
              <span class="font-medium">Service</span>
              <svg class="w-3 h-2" fill="currentColor" viewBox="0 0 10 5">
                <path d="M0 0l5 5 5-5z"/>
              </svg>
            </div>
          </nav>

          <!-- CTA Buttons -->
          <div class="flex items-center space-x-4">
            <button class="hidden lg:block bg-white bg-opacity-20 border border-white text-white px-6 py-2 rounded-md hover:bg-opacity-30 transition-all font-medium">
              Generate a quote
            </button>
            <button class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors font-medium text-sm">
              Login
            </button>
          </div>

          <!-- Mobile menu button -->
          <button class="lg:hidden text-white p-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Hero Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
      <div class="max-w-3xl">
        <h1 class="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          <span class="text-red-500">Your Trusted</span><br>
          <span class="text-white">Global</span><span class="text-white">Consulting Partner</span>
        </h1>
        
        <p class="text-xl text-white text-opacity-90 mb-8 leading-relaxed max-w-2xl">
          Acensure is committed to empowering organizations with strategies that inspire confidence and drive growth. Whether you're looking to optimize risk management, enhance financial performance, or embrace digital transformation, we are here to guide you every step of the way.
        </p>

        <div class="flex flex-col sm:flex-row gap-4">
          <button class="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors font-semibold">
            Generate a quote
          </button>
          <button class="bg-white bg-opacity-20 border border-white text-white px-8 py-3 rounded-md hover:bg-opacity-30 transition-all font-semibold">
            Work with Us
          </button>
        </div>
      </div>
    </div>

    <!-- Pagination dots -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
      <div class="w-3 h-3 bg-white bg-opacity-50 rounded-full"></div>
      <div class="w-3 h-3 bg-white bg-opacity-50 rounded-full"></div>
      <div class="w-8 h-3 bg-red-600 rounded-full"></div>
    </div>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-40"></div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>