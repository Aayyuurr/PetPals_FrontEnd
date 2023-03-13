<script setup lang="ts">
	import FacebookLogo from '@/components/logosAndAssets/facebookLogo.vue';
	import GoogleLogo from '@/components/logosAndAssets/googleLogo.vue';

	import { googleLoginUser } from '@/api/authApi';
	import { useMutation } from 'vue-query';
	import { useQueryClient } from 'vue-query';
	const { isLoading, mutate } = useMutation(() => googleLoginUser(), {
		onSuccess: (data) => {
			//popup google login window
			console.log(data.data.data.google_redirect_link);
			//popup google login window
			const win = window.open(data.data.data.google_redirect_link, 'Login', 'width=500,height=600');
		},
	});
	function onGoogleLogin() {
		mutate();
	}
</script>

<template>
	<div class="flex flex-col justify-center items-center gap-3">
		<!--		div with line and or in middel-->
		<div>
			<h2>{{ $t('message.ou') }}</h2>
		</div>
		<button
			@click="onGoogleLogin"
			class="w-72 h-8 bg-white flex justify-center items-center rounded-lg drop-shadow-md lg:w-80 lg:h-10 md:hover:bg-gray-100 md:transition md:duration-500 md:ease-in-out md:delay-150 md:hover:-translate-y-1 md:hover:scale-110"
		>
			<span><GoogleLogo /></span>{{ $t('message.loginWith', ['Google']) }}
		</button>
		<button
			class="w-72 text-white h-8 bg-blue-500 flex justify-center items-center rounded-lg drop-shadow-md lg:w-80 lg:h-10 md:hover:bg-blue-600 md:transition md:duration-500 md:hover:text-white md:ease-in-out md:delay-150 md:hover:-translate-y-1 md:hover:scale-110"
		>
			<span><FacebookLogo /> </span>{{ $t('message.loginWith', ['Facebook']) }}
		</button>
	</div>
</template>
