<script setup lang="ts">
	import { RouterView } from 'vue-router';
	import changeLang from '@/components/changLang.vue';
</script>

<template>
	<div class="h-screen w-screen lg:flex lg:flex-col lg:flex-col lg:items-center">
		<div class="hidden lg:block lg:w-screen lg:h-16 lg:.relative lg:z-10">
			<changeLang />
		</div>
		<div class="flex flex-grow"><RouterView /></div>
	</div>
</template>

<style scoped></style>
