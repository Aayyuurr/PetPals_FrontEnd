import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from 'vue-query';
import { createI18n } from 'vue-i18n';
import { MotionPlugin } from '@vueuse/motion';

import App from './App.vue';
import router from './router';
import { ar } from '@/languages/arabe';
import { en } from '@/languages/english';
import { fr } from '@/languages/french';

import './assets/main.css';

const i18n = createI18n({
	locale: 'fr',
	fallbackLocale: 'en',
	messages: {
		en,
		fr,
		ar,
	},
});
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin);
app.use(i18n);
app.use(MotionPlugin);
app.mount('#app');
