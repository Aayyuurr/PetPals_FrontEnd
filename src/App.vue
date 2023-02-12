<script setup lang="ts">
	import { RouterView } from 'vue-router';
</script>

<template>
	<div class="parent h-screen">
		<div class="hidden">azeaze</div>
		<div class=""><RouterView /></div>
		<div class="hidden">azeazeazdqdqs</div>
	</div>
</template>

<style scoped>
	.parent {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(5, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}

	.div1 {
		grid-area: 1 / 6 / 6 / 7;
	}
	.div2 {
		grid-area: 1 / 1 / 6 / 2;
	}
	.div3 {
		grid-area: 1 / 2 / 6 / 6;
	}
</style>
