<script setup lang="ts">
import type { Service } from '../../types/Collections';

const iconColor = ['text-sky-500', 'text-orange-400', 'text-purple-600', 'text-pink-500'];
const bgColor = ['bg-sky-50', 'bg-orange-50', 'bg-purple-50', 'bg-pink-50'];

const { services } = defineProps<{
  services: Service[];
}>();

function getIconName(icon: string): string {
  return `ic:outline-${icon.toLowerCase().replaceAll(/_/g, '-')}`;
}

</script>
<template>
  <section id="services" class="py-20 bg-gradient-to-b from-pink-50 to-white">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-16 text-gray-700">{{ $t("Services.Title") }}</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(service, index) in services" :key="index"
          class="bg-white rounded-xl p-8 shadow-sm hover:shadow-[0_10px_0_gray] hover:translate-y-[-10px] transition-all duration-300 flex flex-col">
          <div :class="`mb-4 ${bgColor[index]} w-12 h-12 rounded-xl flex items-center justify-center`">
            <Icon :name='getIconName(service.icon)' class="!p-0 w-8 h-8" :class="iconColor[index]" />
          </div>
          <h3 class="text-xl font-bold mb-2 text-gray-700">{{ service.title }}</h3>
          <p class="text-gray-600 mb-4">{{ service.description }}</p>

          <div class="mb-4">
            <h4 class="text-sm font-semibold text-gray-500 mb-1">{{ $t("Services.Card.Sections.BestFor") }}</h4>
            <p class="text-gray-600">{{ service.best_for }}</p>
          </div>

          <div v-if="service.timeframe" class="mb-4">
            <h4 class="text-sm font-semibold text-gray-500 mb-1">{{ $t("Services.Card.Sections.Timeframe") }}</h4>
            <p class="text-gray-600">{{ service.timeframe }}</p>
          </div>

          <div class="mt-auto pt-4 border-t border-gray-100">
            <div class="text-sm text-gray-500 mb-1">{{ $t("Services.Card.Sections.StartingFrom") }}</div>
            <div class="text-3xl font-bold text-[#ee4b4d]">{{ service.price }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>