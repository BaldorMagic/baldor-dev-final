// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],
    app: {
        head: {
            title: 'Creative Solutions Through Code | Frontend Developer',
            meta: [
                { name: 'description', content: 'Frontend developer specialized in Vue.js, tailwindcss and Typescript. Building performant, accessible and beautiful web applications.' },
                { name: 'robots', content: 'index, follow' },
                { property: 'og:title', content: 'Creative Solutions Through Code | Frontend Developer' },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://baldor.dev' },
                { property: 'og:image', content: '/og-image.webp' },
                { property: 'og:image:alt', content: 'An alien cat walking on a planet' },
            ],
            htmlAttrs: {
                lang: 'en'
            },
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]
        }
    },
    build: {
        analyze: true
    }
})