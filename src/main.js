import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import store from './store';
import './styles/tailwind.scss';

createApp(App)
  .use(store)
  .mount('#app');
