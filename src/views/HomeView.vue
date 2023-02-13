<script lang="ts" setup>
	import dogTemp from '../components/logosAndAssets/dogTemp.vue';
</script>

<template>
	<div class="h-screen w-screen flex flex-col items-center bg-white text-center justify-evenly md:flex-row lg:h-4/5">
		<div>
			<dogTemp />
		</div>
		<div class="flex flex-col items-center gap-2 md:w-2/4">
			<div v-motion-slide-left>
				<h1 class="font-clashDisplay font-bold text-3xl lg:text-5xl">{{ $t('index.welcome') }}</h1>
				<p class="font-satoshi font-medium my-2 lg:text-2xl lg:mt-5">{{ $t('index.description') }}</p>
			</div>
			<div class="flex flex-col gap-3 font-satoshi font-normal lg:mt-14 lg:gap-5" v-motion-slide-left>
				<router-link
					to="/login"
					class="w-72 h-8 bg-red-200 flex justify-center items-center rounded-lg drop-shadow-md lg:w-80 lg:h-10 lg:hover:bg-red-400 lg:transition lg:duration-500 lg:hover:text-white lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-110"
					>{{ $t('message.Login') }}</router-link
				>

				<router-link
					to="/register"
					class="w-72 h-8 bg-red-300 text-center flex justify-center items-center rounded-md drop-shadow-md lg:w-80 lg:h-10 lg:hover:bg-red-500 lg:transition lg:duration-500 lg:hover:text-white lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-110"
					>{{ $t('message.Register') }}</router-link
				>

				<router-link
					to="/market"
					class="w-72 h-8 bg-blue-200 flex justify-center items-center rounded-lg drop-shadow-md lg:w-80 lg:h-10 lg:hover:bg-blue-400 lg:transition lg:duration-500 lg:hover:text-white lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-110"
					>{{ $t('message.marketplace') }}</router-link
				>
			</div>
		</div>
	</div>
</template>
