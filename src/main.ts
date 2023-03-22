import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from 'vue-query';
import { createI18n } from 'vue-i18n';
import { MotionPlugin } from '@vueuse/motion';


/* import font awesome icon component */
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";


import App from './App.vue';
import router from './router';
import { ar } from '@/languages/arabe';
import { en } from '@/languages/english';
import { fr } from '@/languages/french';

import './assets/main.css';
// import * as path from 'path';

export const i18n = createI18n({
	locale: 'fr',
	fallbackLocale: 'en',
	messages: {
		en,
		fr,
		ar,
	},
});

library.add(fas);
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin);
app.use(i18n);
app.use(MotionPlugin);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');
