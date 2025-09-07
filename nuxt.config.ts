// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/image', '@nuxtjs/i18n'],
    i18n: {
        defaultLocale: 'en',
        locales: [
            { code: 'en', name: 'English', file: 'en.json' },
            { code: 'fr', name: 'Français', file: 'fr.json' }
        ]
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
                class: 'scroll-smooth'
            },
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]
        }
    },
    build: {
        analyze: true
    },
})