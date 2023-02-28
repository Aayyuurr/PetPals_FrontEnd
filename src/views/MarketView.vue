<script lang="ts" setup>
	import { useUserStore } from '@/stores/userStore';
	const userStore = useUserStore();
	console.log(userStore.user);
</script>

<template>
	<pre>{{ userStore.user }}</pre>
</template>

<style lang="scss" scoped></style>
