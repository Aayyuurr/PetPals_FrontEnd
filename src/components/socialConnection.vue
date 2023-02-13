<script setup lang="ts">
	import { defineComponent } from 'vue';
	import FacebookLogo from '@/components/logosAndAssets/facebookLogo.vue';
	import GoogleLogo from '@/components/logosAndAssets/googleLogo.vue';
</script>

<template>
	<div class="flex flex-col justify-center items-center gap-3">
<!--		div with line and or in middel-->
		<h2>{{$t('message.ou')}}</h2>
		<button
			class="w-72 h-8 bg-white flex justify-center items-center rounded-lg drop-shadow-md lg:w-80 lg:h-10 lg:hover:bg-gray-100 lg:transition lg:duration-500 lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-110"
		>
			<span><GoogleLogo /></span>{{ $t('message.loginWith', ['Google']) }}
		</button>
		<button
			class="w-72 text-white h-8 bg-blue-500 flex justify-center items-center rounded-lg drop-shadow-md lg:w-80 lg:h-10 lg:hover:bg-blue-600 lg:transition lg:duration-500 lg:hover:text-white lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-110"
		>
			<span><FacebookLogo /> </span>{{ $t('message.loginWith', ['Facebook']) }}
		</button>
	</div>
</template>
