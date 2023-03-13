<script lang="ts" setup>
	import RegisterForm from '@/components/registerForm.vue';
	import ArrowTurnIcon from '@/components/logosAndAssets/arrowTurnIcon.vue';
	import router from '@/router';
	import SocialConnection from '@/components/socialConnection.vue';

	function goBack() {
		router.go(-1);
	}
</script>

<template>
	<div class="test flex flex-col w-screen gap-4 h-full lg:mb-3">
		<div
			class="flex flex-row justify-between w-screen p-2 drop-shadow-sm border-b-2 lg:hidden"
		>
			<ArrowTurnIcon @click="goBack" />
			<h1 class="font-clashDisplay font-medium text-green-600">
				Pet<span class="text-red-300">Pals</span>
			</h1>
		</div>
		<div class="flex flex-row lg:mt-10">
			<div
				class="md:drop-shadow-md md:m-auto md:p-10 md:rounded-lg md:border-2 md:bg-gray-50"
			>
				<div class="content-center flex flex-col text-center gap-4">
					<h1 class="font-clashDisplay font-medium text-3xl lg:text-5xl">
						{{ $t('login.bonjour') }}
					</h1>
					<p class="font-satoshi w-screen text-2xl font-normal md:w-auto">
						{{ $t('login.bvnText') }}
					</p>
				</div>
				<RegisterForm />
				<div>
					<SocialConnection />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	@media screen and (min-width: 1024px) {
		.test {
			background-image: url('../assets/Cat_bg_login.png');
			background-repeat: no-repeat;
			background-position: center;
			background-size: 70%;
		}
	}
</style>
