<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <!-- Customer Stat -->
        <div class="relative">
          <div class="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">200,000+</div>
          <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">CUSTOMER</div>
          <div class="absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-16 bg-red-600 hidden md:block"></div>
        </div>

        <!-- Quote Generated Stat -->
        <div class="relative">
          <div class="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">150,000+</div>
          <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">QUOTE GENERATED</div>
          <div class="absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-16 bg-red-600 hidden md:block"></div>
        </div>

        <!-- Years in Business Stat -->
        <div>
          <div class="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">12+</div>
          <div class="text-sm font-medium text-gray-600 uppercase tracking-wide">YEARS IN BUSINESS</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StatsSection'
}
</script>