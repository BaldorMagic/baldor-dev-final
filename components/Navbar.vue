<template>
    <nav class="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <!-- Title -->
        <NuxtLink to="https://www.baldor.dev">
          <h1 class="text-5xl font-bold text-gray-900 whitespace-nowrap">
          Baldor
        </h1>
        </NuxtLink>
        
        <!-- Desktop menu -->
        <div class="hidden text-xl lg:flex space-x-8 items-center">
          <NuxtLink to="#projects" class="text-gray-600 hover:text-[#ee4b4d] transition-colors">
            Results
          </NuxtLink>
          <NuxtLink to="#services" class="text-gray-600 hover:text-[#ee4b4d] transition-colors">
            Services
          </NuxtLink>
          <NuxtLink to="#contact" class="bg-[#ee4b4d] text-white px-4 py-2 rounded-lg hover:bg-[#F06163] transition-colors">
            Let's Connect
          </NuxtLink>
        </div>
    
        <!-- Mobile menu -->
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="max-h-0 opacity-0"
          enter-to-class="max-h-96 opacity-100"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="max-h-96 opacity-100"
          leave-to-class="max-h-0 opacity-0"
        >
          <div v-if="isOpen" class="lg:hidden w-full overflow-hidden">
            <div class="text-lg py-4 space-y-4 flex flex-col items-center">
              <NuxtLink to="#projects" class="text-gray-600 hover:text-[#ee4b4d] transition-colors" @click="isOpen = false">
                Results
              </NuxtLink>
              <NuxtLink to="#services" class="text-gray-600 hover:text-[#ee4b4d] transition-colors" @click="isOpen = false">
                Services
              </NuxtLink>
              <NuxtLink to="#contact" class="bg-[#ee4b4d] text-white px-4 py-2 rounded-lg hover:bg-[#F06163] transition-colors" @click="isOpen = false">
                Let's connect
              </NuxtLink>
            </div>
          </div>
        </Transition>
      </div>
    
      <!-- Burger/Close button -->
      <button 
        class="lg:hidden absolute top-4 right-4 text-gray-600 hover:text-[#ee4b4d] transition-colors"
        @click="isOpen = !isOpen"
        aria-label="Toggle menu"
      >
        <Icon :name="isOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="w-10 h-10" />
      </button>
    </nav>
    </template>
    
    <script setup lang="ts">
    const isOpen = ref(false);
    </script>