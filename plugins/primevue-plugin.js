import { defineNuxtPlugin } from '#app';
import PrimeVue from 'primevue/config';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {});
    nuxtApp.vueApp.component('Dropdown', Dropdown);
    nuxtApp.vueApp.component('InputText', InputText);
});