<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Images -->
        <div class="relative">
          <div class="rounded-3xl overflow-hidden">
            <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                 alt="Business consulting" 
                 class="w-full h-96 object-cover">
          </div>
          <div class="absolute -bottom-6 -right-6 w-64 h-48 rounded-2xl overflow-hidden shadow-xl">
            <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600" 
                 alt="Team collaboration" 
                 class="w-full h-full object-cover">
          </div>
        </div>

        <!-- Content -->
        <div class="space-y-8">
          <div>
            <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About Us</h2>
            <div class="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Acensure is a global consulting firm dedicated to empowering businesses with strategic solutions in risk management, financial advisory, and technology-driven growth.
              </p>
              <p>
                Our mission is to help clients navigate the complexities of modern industries by delivering data-driven, innovative, and sustainable strategies that drive business success
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>