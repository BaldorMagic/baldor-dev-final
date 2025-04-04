<script setup lang="ts">
useSeoMeta({
  title: 'Creative Solutions Through Code | Fullstack Developer',
  ogTitle: '%s',
  description: 'Fullstack developer specialized in Vue.js, tailwindcss and Typescript. Building performant, accessible and beautiful web applications.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
    <div>
        <Navbar />
        <HeroSection />
        <NuxtPage />
        <Contact />
        <Footer />
    </div>
</template>