import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

require("@fortawesome/fontawesome-free/js/brands.js");
require("@fortawesome/fontawesome-free/js/solid.js");
require("@fortawesome/fontawesome-free/js/fontawesome.js");

createApp(App).use(router).mount('#app')
