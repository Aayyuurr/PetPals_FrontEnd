<script lang="ts" setup>
	import { toFormValidator } from '@vee-validate/zod';
	import * as zod from 'zod';
	import { Form, useField, useForm } from 'vee-validate';

	const validationSchema = toFormValidator(
		zod.object({
			email: zod.string().email('Email est requis').min(1, 'Email doit être valide'),
			password: zod.string().min(6, 'Mot de passe doit être au moins 6 caractères').min(1, 'Mot de passe est requis'),
		})
	);
	const { handleSubmit, errors, resetForm } = useForm({
		validationSchema: validationSchema,
	});
	const { value: email } = useField('email');
	const { value: password } = useField('password');
	function OnConnextion(values) {
		alert(JSON.stringify(values, null, 2));
	}
</script>

<template>
	<div class="flex flex-row">
		<form
			@submit="OnConnextion"
			class="max-w-[27rem] mx-auto overflow-hidden shadow-lg bg-ct-dark-200 rounded-2xl p-8 space-y-5"
		>
			<div class="">
				<label for="email" class="block text-ct-blue-600 mb-3">Email Address</label>
				<input
					type="email"
					placeholder=" "
					v-model="email"
					class="block w-full rounded-2xl appearance-none focus:outline-none py-2 px-4"
					id="email"
				/>
				<span class="text-red-500 text-xs pt-1 block">{{ errors.email }}</span>
			</div>
			<div class="">
				<label for="password" class="block text-ct-blue-600 mb-3">Password</label>
				<input
					v-model="password"
					type="password"
					placeholder=" "
					class="block w-full rounded-2xl appearance-none focus:outline-none py-2 px-4"
					id="password"
				/>
				<span class="text-red-500 text-xl pt-1 block">{{ errors.password }}</span>
			</div>
			<div class="text-right">
				<a href="" class="">Forgot Password?</a>
			</div>
			<button
				class="w-72 h-8 bg-white flex justify-center items-center rounded-lg drop-shadow-md lg:w-80 lg:h-10 lg:hover:bg-gray-100 lg:transition lg:duration-500 lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-110"
				type="submit"
			>
				login
			</button>
			<span class="block"
				>Need an account?
				<router-link :to="{ name: 'register' }" class="text-ct-blue-600">Sign Up Here</router-link></span
			>
		</form>
	</div>
</template>

<style lang="scss" scoped></style>
