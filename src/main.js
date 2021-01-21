import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import store from './store';
import './styles/tailwind.scss';

const app = createApp(App);

app.use(store);
app.mount('#app');
