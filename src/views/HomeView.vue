<script lang="ts" setup></script>

<template>
	<div class="h-screen w-screen flex flex-col items-center bg-white text-center justify-evenly">
		<div>
			<img class="w-60" alt="" src="../assets/dog-paw-animate.svg" />
		</div>
		<div>
			<h1 class="font-clashDisplay font-bold text-3xl">{{ $t('index.welcome') }}</h1>
			<p class="font-satoshi font-medium test-lg">{{ $t('index.description') }}</p>
		</div>
		<div class="flex flex-col gap-3 font-satoshi font-normal">
			<router-link to="/login" class="w-72 h-8 bg-red-200 flex justify-center items-center rounded-lg drop-shadow-md">{{
				$t('message.Login')
			}}</router-link>
			<router-link
				to="/register"
				class="w-72 h-8 bg-red-300 text-center flex justify-center items-center rounded-md drop-shadow-md"
				>{{ $t('message.Register') }}</router-link
			>
			<router-link
				to="/market"
				class="w-72 h-8 bg-blue-200 flex justify-center items-center rounded-lg drop-shadow-md"
				>{{ $t('message.marketplace') }}</router-link
			>
		</div>
	</div>
</template>
