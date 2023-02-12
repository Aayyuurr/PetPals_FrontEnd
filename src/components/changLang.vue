<script lang="ts" setup>
	import { useLangStore } from '@/stores/langStore';
	import { ref } from 'vue';
	import dropDownIcon from '@/components/logosAndAssets/dropDownIcon.vue';
	const langs: string[] = ['fr', 'ar', 'en'];
	const fullLangs: string[] = ['Français', 'العربية', 'English'];
	const showlang = ref(false);

	const store = useLangStore();
	function setLangue(l: string) {
		store.setLang(l);
		showlang.value = !showlang.value;
	}
	function toggle() {
		showlang.value = !showlang.value;
	}
</script>

<template>
	<div class="flex flex-col items-end mr-20 ">
		<div @click="toggle" class="hover: cursor-pointer">
			<span class="flex flex-row justify-center items-center font-satoshi font-semibold"
				>{{ $t('index.langue') }}<dropDownIcon
			/></span>
		</div>
		<div v-if="showlang" class="flex flex-col gap-1 font-satoshi font-medium w-28 transition duration-1000">
			<button
				v-for="l in langs"
				:key="l"
				@click="setLangue(l)"
				:class="{ 'text-blue-400': l === store.language, 'hover:text-blue-400': true, 'transition duration-300': true}"
			>
				{{ fullLangs[langs.indexOf(l)] }}
			</button>
		</div>
	</div>
</template>
