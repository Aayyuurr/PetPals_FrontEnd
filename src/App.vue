<script setup lang="ts">
	import { RouterView } from 'vue-router';
	import changeLang from '@/components/changLang.vue';
</script>

<template>
	<div class="h-screen w-screen lg:flex lg:flex-col">
		<div class="hidden lg:block lg:w-screen lg:h-1/5">
			<changeLang />
		</div>
		<div class="lg:h-4/5"><RouterView /></div>
	</div>
</template>

<style scoped></style>
