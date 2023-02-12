import { defineStore } from 'pinia';
import { ref } from 'vue';
import { i18n } from '@/main';
export const useLangStore = defineStore('langStore', {
	state: () => ({
		language: ref('fr'),
	}),
	actions: {
		setLang(lang: string) {
			this.language = lang;
			// @ts-ignore
			i18n.global.locale = lang;
		},
	},
});
