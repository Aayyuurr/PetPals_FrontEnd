<script lang="ts" setup>
	//imporation pour la validation
	import { toFormValidator } from '@vee-validate/zod';
	import * as zod from 'zod';
	import { Form, Field, ErrorMessage } from 'vee-validate';
	//importation pour le login
	import { authApi, registerUser } from '../api/authApi';
	import router from '../router';
	import { useMutation } from 'vue-query';
	import type { registerData } from '../api/types';
	import { useUserStore } from '@/stores/userStore';
	import { getUser } from '../api/authApi';
	import { ref } from 'vue';
	const errorLog = ref(0);
	const userStore = useUserStore();
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
				password: zod
					.string()
					.min(6, 'Mot de passe doit être au moins 6 caractères')
					.min(1, 'Mot de passe est requis'),
				password_confirmation: zod.string().min(1, 'Confirmer votre mot de passe'),
			})
			.refine((data) => data.password === data.password_confirmation, {
				message: 'Les mots de passe ne correspondent pas',
				path: ['password_confirmation'],
			})
	);
	const { isLoading, mutate } = useMutation(
		(credentials: registerData) => registerUser(credentials),
		{
			onSuccess: (data) => {
				authApi.defaults.headers.common['Authorization'] = `Bearer ${data?.data?.data?.token}`;

				const df = getUser().then((res) => {
					const user = res?.data?.user;
					userStore.setUser(user);
					router.push({ name: 'market' });
				});
			},
			onError :(error)=>{
				errorLog.value = 1;
			}
		}
	);
	function onRegister(values: any) {
		mutate(values);
	}
</script>

<template>
	<div class="flex justify-center items-center font-satoshi font-normal p-2">
		<Form
			:validation-schema="validationSchema"
			@submit="onRegister"
			class="flex flex-col gap-2"
		>
			<p v-if="errorLog" class="text-red-500 text-xs pt-1 block lg:text-sm">{{ $t('register.error') }}</p>

			<div>
				<label class="block text-ct-blue-600 mb-3 lg:text-lg" for="name">{{$t('register.name')}}</label>
				<Field
					name="name"
					class="block w-72 h-8 rounded-lg border lg:w-80 lg:h-10 lg:text-xl"
				/>
				<ErrorMessage name="name" class="text-red-500 text-xs pt-1 block lg:text-sm" />
			</div>
			<div>
				<label class="block text-ct-blue-600 mb-3 lg:text-lg" for="email"> {{$t('message.Email')}}</label>
				<Field
					name="email"
					type="email"
					class="block w-72 h-8 rounded-lg border lg:w-80 lg:h-10 lg:text-xl"
				></Field>
				<ErrorMessage
					name="email"
					type="email"
					class="text-red-500 text-xs pt-1 block lg:text-sm"
				/>
			</div>
			<div>
				<label class="block text-ct-blue-600 mb-3 lg:text-lg" for="password">{{$t('message.Password')}}</label>
				<Field
					name="password"
					type="password"
					class="block w-72 h-8 rounded-lg border lg:w-80 lg:h-10 lg:text-xl"
				/>
				<ErrorMessage name="password" class="text-red-500 text-xs pt-1 block lg:text-sm" />
			</div>
			<div>
				<label class="block text-ct-blue-600 mb-3 lg:text-lg" for="password_confirmation">
					{{$t('message.Confirm Password')}}</label
				>
				<Field
					type="password"
					name="password_confirmation"
					class="block w-72 h-8 rounded-lg border lg:w-80 lg:h-10 lg:text-xl"
				/>
				<ErrorMessage
					name="password_confirmation"
					class="text-red-500 text-xs pt-1 block lg:text-sm"
				/>
			</div>
			<div>
				<button
					type="submit"
					class="w-72 h-8 bg-red-200 flex mt-3 justify-center items-center rounded-lg drop-shadow-md lg:w-80 lg:h-10 md:hover:bg-red-300 md:transition md:duration-500 md:ease-in-out md:delay-150 md:hover:-translate-y-1 md:hover:scale-110"
				>
					{{$t('message.Register')}}
				</button>
			</div>
		</Form>
	</div>
</template>

<style lang="scss" scoped></style>
