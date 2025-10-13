import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Select from 'primevue/select';
import InputNumber from 'primevue/inputnumber';
import App from './App.vue';

const app = createApp(App);
app.use(PrimeVue);
app.component('Select', Select);
app.component('InputNumber', InputNumber)
app.mount('#app');
