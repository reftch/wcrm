import { createApp } from 'vue'
import app from './app.vue';
import Well from '../src/index';
import Views from './globalViews';
import router from './router/index';

createApp(app)
	.use(Well)
	.use(Views)
	.use(router)
	.mount('#app');