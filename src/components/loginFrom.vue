<script lang="ts" setup>
	//imporation pour la validation
	import { toFormValidator } from '@vee-validate/zod';
	import * as zod from 'zod';
	import { Form, Field, ErrorMessage } from 'vee-validate';
	import type { loginData } from '../api/types';
	//importation pour le login
	import { loginUser } from '../api/authApi';
	import router from '../router';
	import { useQueryClient } from 'vue-query';
	import { useMutation, useQuery } from 'vue-query';
	import { authApi } from '../api/authApi';
	// data validation
	const validationSchema = toFormValidator(
		zod.object({
			email: zod.string().email('Email est requis').min(1, 'Email doit être valide'),
			password: zod.string().min(6, 'Mot de passe doit être au moins 6 caractères').min(1, 'Mot de passe est requis'),
		})
	);
	// const { handleSubmit, errors, resetForm } = useForm({
	// 	validationSchema: validationSchema,
	// });
	// const { value: email } = useField('email');
	// const { value: password } = useField('password');

	//login function
	const queryClient = useQueryClient();
	const { isLoading, mutate } = useMutation((credentials: loginData) => loginUser(credentials), {
		onSuccess: (data) => {
			// console.log(data.data?.data.token);
			//add token to local cookie
			// authApi.common.headers.Authorization = `Bearer ${data.data.data.token}`;
			// document.cookie.set('token', data.data.data.token);


			router.push('/market');
		},
		onError: (error) => {
			console.log(error);
		},
	});

	function onConnextion(values:any) {
		mutate(values);
	}
</script>

<template>
	<div class="flex justify-center items-center font-satoshi font-normal p-2">
		<Form @submit="onConnextion" :validation-schema="validationSchema" class="flex flex-col gap-2">
			<div class="">
				<label for="email" class="block text-ct-blue-600 mb-3 lg:text-lg">{{ $t('message.Email') }}</label>
				<Field
					type="email"
					placeholder=" "
					class="block w-72 h-8 rounded-lg border lg:w-80 lg:h-10 lg:text-xl"
					name="email"
				/>
				<ErrorMessage class="text-red-500 text-xs pt-1 block lg:text-sm" name="email" />
			</div>
			<div class="">
				<label for="password" class="block text-ct-blue-600 mb-3 lg:text-lg">{{ $t('message.Password') }}</label>
				<Field
					type="password"
					placeholder=" "
					class="block w-72 h-8 rounded-lg border lg:w-80 lg:h-10 lg:text-xl"
					name="password"
				/>
				<ErrorMessage class="text-red-500 text-xs pt-1 block lg:text-sm" name="password" />
			</div>
			<div class="text-right test-2xl">
				<a href="" class="">{{ $t('login.forgotPassword') }}</a>
			</div>
			<button
				class="w-72 h-8 bg-red-200 flex justify-center items-center rounded-lg drop-shadow-md lg:w-80 lg:h-10 md:hover:bg-red-300 md:transition md:duration-500 md:ease-in-out md:delay-150 md:hover:-translate-y-1 md:hover:scale-110"
				type="submit"
			>
				{{ $t('login.Login') }}
			</button>
			<span class="block text-start text-base"
				>{{ $t('login.needAccount') }}
				<router-link :to="{ name: 'register' }" class="text-green-700">{{ $t('login.singUpHere') }}</router-link></span
			>
		</Form>
	</div>
</template>

<style lang="scss" scoped></style>
