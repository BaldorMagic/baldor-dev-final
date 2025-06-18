<script setup lang="ts">
useSeoMeta({
  title: 'Creative Solutions Through Code | Fullstack Developer',
  ogTitle: 'Creative Solutions Through Code | Fullstack Developer',
  ogUrl: process.env.NUXT_SITE_URL,
  description: 'Fullstack developer specialized in React.js, tailwindcss and Typescript. Building performant, accessible and beautiful web applications.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: {
    url: '/public/og-image.webp',
    alt: 'A pink axolotl'
  },
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