import { createApp } from 'vue';
import App from './App.vue';
import './assets/index.css';
import AOS from 'aos';
// import 'aos/dist/aos.css';

createApp(App).mount('#app');
AOS.init();
// document.addEventListener('DOMContentLoaded', (e) => {
//   AOS.init();
// });
