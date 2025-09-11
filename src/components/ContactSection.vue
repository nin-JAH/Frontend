<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Contact</h2>
        <div class="w-16 h-1 bg-red-600 mx-auto"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div class="space-y-8">
          <!-- Address -->
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-red-50 border border-red-200 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-1">Address</h3>
              <p class="text-gray-600">West Park Towers,Westlands,Nairobi,Kenya</p>
            </div>
          </div>

          <!-- Phone -->
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-red-50 border border-red-200 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-1">Call Us</h3>
              <p class="text-gray-600">+254 705 200 222</p>
            </div>
          </div>

          <!-- Email -->
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-red-50 border border-red-200 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-1">Email Us</h3>
              <p class="text-gray-600">info@avensure.com</p>
            </div>
          </div>

          <!-- Hours -->
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-red-50 border border-red-200 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-1">Open Hours</h3>
              <p class="text-gray-600">Mon-Sat:8AM-6PM</p>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="relative">
          <div class="bg-cover bg-center rounded-lg p-8 min-h-96" 
               style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800')">
            <h3 class="text-2xl font-semibold text-white text-center mb-8">Get in Touch</h3>
            
            <form @submit.prevent="submitForm" class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input v-model="form.name" 
                       type="text" 
                       placeholder="Your Name" 
                       class="w-full px-4 py-3 bg-white bg-opacity-90 rounded-lg border-0 focus:ring-2 focus:ring-red-500 focus:outline-none">
                <input v-model="form.email" 
                       type="email" 
                       placeholder="Your Email" 
                       class="w-full px-4 py-3 bg-white bg-opacity-90 rounded-lg border-0 focus:ring-2 focus:ring-red-500 focus:outline-none">
              </div>
              <input v-model="form.subject" 
                     type="text" 
                     placeholder="Subject" 
                     class="w-full px-4 py-3 bg-white bg-opacity-90 rounded-lg border-0 focus:ring-2 focus:ring-red-500 focus:outline-none">
              <textarea v-model="form.message" 
                        rows="6" 
                        placeholder="Message" 
                        class="w-full px-4 py-3 bg-white bg-opacity-90 rounded-lg border-0 focus:ring-2 focus:ring-red-500 focus:outline-none resize-none"></textarea>
              
              <div class="flex justify-end">
                <button type="submit" 
                        class="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors font-semibold">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log('Form submitted:', this.form)
    }
  }
}
</script>