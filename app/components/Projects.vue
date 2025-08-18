<script setup lang="ts">
import { ref } from 'vue';
import type { Project } from '../../types/Collections';

const { projects } = defineProps<{
    projects: Project[]
}>();
const activeProject = ref(0);
const iconColor = ['text-orange-600', 'text-teal-600', 'text-sky-600', 'text-purple-600', 'text-pink-500'];
const gradientFrom = ['from-orange-300', 'from-teal-300', 'from-sky-300', 'from-purple-200', 'from-rose-200'];
const gradientTo = ['to-amber-200', 'to-emerald-200', 'to-blue-200', 'to-violet-200', 'to-pink-200'];

function getIconName(icon: string): string {
    return `ic:outline-${icon.toLowerCase().replace(/_/g, '-')}`;
}


</script>
<template>
    <section id="projects" class="py-20 bg-gradient-to-b from-rose-50 to-white">
        <div class="max-w-6xl mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-16 text-gray-700">
                Real Results for Businesses
            </h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div v-for="(project, index) in projects" :key="index"
                    class="group bg-white rounded-xl p-6 hover:shadow-[0_10px_0_gray] hover:translate-y-[-10px] transition-all duration-300 border border-gray-100"
                    @mouseenter="activeProject = index" @mouseleave="activeProject = 0">
                    <div
                        :class="`bg-gradient-to-br ${gradientFrom[index]} ${gradientTo[index]} rounded-xl p-4 w-fit flex items-center justify-center`">
                        <Icon :name='getIconName(project.icon)' class="!p-0 w-8 h-8" :class="iconColor[index]" />
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-gray-700">{{ project.title }}</h3>
                    <div class="mb-4">
                        <h4 class="text-sm font-semibold text-gray-500 mb-1">Challenge:</h4>
                        <p class="text-gray-600">{{ project.challenge }}</p>
                    </div>
                    <div class="mb-4">
                        <h4 class="text-sm font-semibold text-gray-500 mb-1">Solution:</h4>
                        <p class="text-gray-600">{{ project.solution }}</p>
                    </div>
                    <div class="space-y-2 mb-4">
                        <div v-for="(result, i) in project.result" :key="i"
                            class="flex items-center text-sm text-gray-600">
                            <Icon name="lucide:star" width="24" height="24" /> {{ result }}
                        </div>
                    </div>
                    <!-- <NuxtLink to="project.demoUrl"
                        class="text-gray-600 hover:text-orange-400 flex items-center text-sm">
                        <Icon name="lucide:external-link" width="24" height="24" />
                    </NuxtLink> -->
                </div>
            </div>
        </div>
    </section>
</template>