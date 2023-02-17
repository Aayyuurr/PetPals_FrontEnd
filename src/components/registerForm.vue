<script lang="ts" setup>
	//imporation pour la validation
	import { toFormValidator } from '@vee-validate/zod';
	import * as zod from 'zod';
	import { Form, Field, ErrorMessage } from 'vee-validate';
	//importation pour le login
	import { registerUser } from '../api/authApi';
	import router from '../router';
	import { useMutation } from 'vue-query';
	import type {registerData} from'../api/types';



	// data validation
	const validationSchema = toFormValidator(
		zod
			.object({
				name: zod
					.string()
					.min(1, 'Nom est requis')
					.min(3, 'Nom doit être au moins 3 caractères')
					.max(255, 'Nom doit être au plus 255 caractères'),
				email: zod
					.string()
					.email('Email est requis')
					.min(1, 'Email doit être valide')
					.max(255, 'Email doit être au plus 255 caractères'),
				password: zod.string().min(6, 'Mot de passe doit être au moins 6 caractères').min(1, 'Mot de passe est requis'),
				password_confirmation: zod.string().min(1, 'Confirmer votre mot de passe'),
			})
			.refine((data) => data.password === data.password_confirmation, {
				message: 'Les mots de passe ne correspondent pas',
				path: ['password_confirmation'],
			})
	);
	const { isLoading, mutate } = useMutation((credentials: registerData) => registerUser(credentials), {
		onSuccess: (data) => {
			console.log(data);
			router.push('/market');
		},
		onError: (error) => {
			console.log(error);
		},
	});
	function onRegister(values: any) {
		mutate(values);
	}
</script>

<template>
	<Form :validation-schema="validationSchema" @submit="onRegister">
		<div>
			<lable for="name">votre nom</lable>
			<Field name="name" />
			<ErrorMessage name="name" />
		</div>
		<div>
			<lable for="email"> votre mail</lable>
			<Field name="email" type="email"></Field>
			<ErrorMessage name="email" type="email"></ErrorMessage>
		</div>
		<div>
			<lable for="password"> votre mdp</lable>
			<Field name="password" type="password" />
			<ErrorMessage name="password" />
		</div>
		<div>
			<lable for="password_confirmation"> confirmer mdp</lable>
			<Field type="password" name="password_confirmation" />
			<ErrorMessage name="password_confirmation" />
		</div>
		<div>
			<button type="submit">register</button>
		</div>
	</Form>
</template>

<style lang="scss" scoped></style>
