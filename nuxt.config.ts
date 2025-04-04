// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],
    app: {
        head: {
            titleTemplate: '%s %separator %siteName',
            templateParams: {
                separator: '|',
                siteName: 'Baldor'
            },
            meta: [
                { name: 'description', content: 'Fullstack developer specialized in Vue.js, tailwindcss and Typescript. Building performant, accessible and beautiful web applications.' },
                { property: 'og:title', content: 'Creative Solutions Through Code | Fullstack Developer' },
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
    site: {
        url: process.env.NUXT_SITE_URL,
        name: 'My Awesome Website'
    },
    build: {
        analyze: true
    }
})