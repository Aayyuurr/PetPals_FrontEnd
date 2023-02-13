<script lang="ts" setup>
	import ArrowTurnIcon from '@/components/logosAndAssets/arrowTurnIcon.vue';
	import router from '@/router';
	import SocialConnection from '@/components/socialConnection.vue';
	import LoginFrom from '@/components/loginFrom.vue';

	function goBack() {
		router.go(-1);
	}
</script>

<template>
	<div class="flex flex-col m-2 content-center items-center w-screen">
		<div class="flex flex-row justify-between">
			<ArrowTurnIcon @click="goBack" />
			<h1>{{ $t('login.name') }}</h1>
		</div>
		<div>
			<h1>{{ $t('login.bonjour') }}</h1>
			<p>{{ $t('login.bvnText') }}</p>
		</div>
		<div><LoginFrom /></div>
		<div><SocialConnection /></div>
	</div>
</template>

<style lang="scss" scoped></style>
