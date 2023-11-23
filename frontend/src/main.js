import './assets/main.css'
import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import router from './router'
import 'primevue/resources/themes/saga-blue/theme.css'; 
import 'primevue/resources/primevue.min.css'; 
import Dock from 'primevue/dock';

const app = createApp(App)

app.use(router);
app.use(PrimeVue);
app.use(ToastService);
app.component('Dock', Dock);



app.mount('#app')
