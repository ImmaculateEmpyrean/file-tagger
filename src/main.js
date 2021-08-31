import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

require("@fortawesome/fontawesome-free/js/brands.js");
require("@fortawesome/fontawesome-free/js/solid.js");
require("@fortawesome/fontawesome-free/js/fontawesome.js");

require("animate.css/animate.css");

createApp(App).use(router).mount('#app')
