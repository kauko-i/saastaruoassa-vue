import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Select from 'primevue/select';
import App from './App.vue';

const app = createApp(App);
app.use(PrimeVue);
app.component('Select', Select);
app.mount('#app');
