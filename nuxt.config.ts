// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: '/carList/',
        head: {
            title: 'CarList',
        },
    },
    devtools: { enabled: true },
    modules: ['@pinia/nuxt'],
    build: { transpile: ['primevue'], },
    css: [
        '~/assets/scss/_main.scss',
    ],
})
