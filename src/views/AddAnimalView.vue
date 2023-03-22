<script lang="ts" setup>
	import { ref, computed } from 'vue';
	import ArrowTurnIcon from '@/components/logosAndAssets/arrowTurnIcon.vue';
	import router from '@/router';
	import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid';
	import {
		Combobox,
		ComboboxInput,
		ComboboxButton,
		ComboboxOptions,
		ComboboxOption,
		TransitionRoot,
		RadioGroup,
		RadioGroupLabel,
		RadioGroupOption,
		RadioGroupDescription,
	} from '@headlessui/vue';
	import femaleIcone from '@/components/logosAndAssets/femaleIcone.vue';
	import maleIcone from '@/components/logosAndAssets/maleIcone.vue';
	import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
	import { useMutation } from 'vue-query/esm';
	import type { useRegisterPet } from '@/api/types';
	import { authApi, registerPet } from '@/api/authApi';

	function goBack() {
		router.go(-1);
	}

	let selected = ref('0');
	let query = ref('');

	let selectedSex = ref('0');
	let selectedDate = ref('2010-01-01');

	const { isLoading, mutate } = useMutation(
		(credentials: useRegisterPet) => registerPet(credentials),
		{
			onSuccess: (data) => {
				console.log(data);
			},
			onError: (error) => {},
		}
	);
	function regsi() {
		let type = true;
		let sex = true;
		if (selected.value === '0') {
			type = false;
		}
		if (selectedSex.value === '0') {
			sex = false;
		}
		mutate({
			type: type,
			sex: sex,
			birth_date: selectedDate.value,
		});
	}
</script>

<template>
	<div  class="test flex flex-col w-screen  h-full ">
		<div
			class="flex flex-row justify-between w-screen p-2 drop-shadow-sm border-b-2 lg:hidden"
		>
			<ArrowTurnIcon @click="goBack" />
			<h1 class="font-clashDisplay font-medium text-green-600">
				Pet<span class="text-red-300">Pals</span>
			</h1>
		</div>
		<!--main div-->
		<div class=" fond h-screen flex justify-center pt-3">
			<div class="flex flex-col gap-5">
				<!--				select animal-->
				<div class="flex">
					<RadioGroup v-model="selected">
						<RadioGroupLabel class="font-clashDisplay font-semibold">{{
							$t('register.animal')
						}}</RadioGroupLabel>
						<div class="flex flex-row gap-3 font-satoshi font-medium text-center mt-3">
							<RadioGroupOption as="template" value="0" v-slot="{ active, checked }">
								<div
									:class="[active ? 'bg-pink-400' : '', checked ? 'bg-pink-400' : 'bg-white']"
									class="w-28 h-28 rounded-2xl flex items-center justify-center cursor-pointer drop-shadow-md"
								>
									<div class="flex flex-col">
										<RadioGroupLabel
											as="div"
											:class="checked ? 'text-white' : 'text-gray-900'"
										>
											<font-awesome-icon
												:icon="['fas', 'dog']"
												class="h-14"
												:class="[active ? 'animate-bounce' : '']"
											/>
										</RadioGroupLabel>
										<RadioGroupDescription
											as="p"
											:class="checked ? 'text-white' : 'text-gray-900'"
										>
											{{ $t('register.chien') }}
										</RadioGroupDescription>
									</div>
								</div>
							</RadioGroupOption>

							<RadioGroupOption as="template" value="1" v-slot="{ active, checked }">
								<div
									:class="[active ? 'bg-pink-400' : '', checked ? 'bg-pink-400' : 'bg-white']"
									class="w-28 h-28 rounded-2xl cursor-pointer flex items-center justify-center drop-shadow-md"
								>
									<div class="flex flex-col">
										<RadioGroupLabel
											as="div"
											:class="checked ? 'text-white' : 'text-gray-900'"
										>
											<font-awesome-icon
												:icon="['fas', 'cat']"
												class="h-14"
												:class="[active ? 'animate-bounce' : '']"
											/>
										</RadioGroupLabel>
										<RadioGroupDescription
											as="p"
											:class="checked ? 'text-white' : 'text-gray-900'"
										>
											{{ $t('register.chat') }}
										</RadioGroupDescription>
									</div>
								</div>
							</RadioGroupOption>

							<RadioGroupOption as="template" value="2" v-slot="{ active, checked }">
								<div
									:class="[active ? 'bg-pink-400' : '', checked ? 'bg-pink-400' : 'bg-white']"
									class="w-28 h-28 rounded-2xl flex cursor-pointer items-center justify-center drop-shadow-md"
								>
									<div class="flex flex-col">
										<RadioGroupLabel
											as="div"
											:class="checked ? 'text-white' : 'text-gray-900'"
										>
											<font-awesome-icon
												:icon="['fas', 'dove']"
												class="h-14"
												:class="[active ? 'animate-bounce' : '']"
											/>
										</RadioGroupLabel>
										<RadioGroupDescription
											as="p"
											:class="checked ? 'text-white' : 'text-gray-900'"
										>
											{{ $t('register.oiseau') }}
										</RadioGroupDescription>
									</div>
								</div>
							</RadioGroupOption>
						</div>
					</RadioGroup>
				</div>
				<!--select sex-->
				<div class="flex">
					<RadioGroup v-model="selectedSex">
						<RadioGroupLabel class="font-clashDisplay font-semibold">{{
							$t('register.sex')
						}}</RadioGroupLabel>
						<div class="flex flex-row gap-3 font-satoshi font-medium text-center mt-3">
							<RadioGroupOption as="template" value="0" v-slot="{ active, checked }">
								<div
									:class="[active ? 'bg-pink-400' : '', checked ? 'bg-pink-400' : 'bg-white']"
									class="w-28 h-28 rounded-2xl flex items-center justify-center cursor-pointer drop-shadow-md"
								>
									<div class="flex flex-col">
										<RadioGroupLabel
											as="div"
											:class="checked ? 'text-white' : 'text-gray-900'"
										>
											<font-awesome-icon
												:icon="['fas', 'mars']"
												class="h-14"
												:class="[active ? 'animate-bounce' : '']"
											/>
										</RadioGroupLabel>
										<RadioGroupDescription
											as="p"
											:class="checked ? 'text-white' : 'text-gray-900'"
										>
											{{ $t('register.male') }}
										</RadioGroupDescription>
									</div>
								</div>
							</RadioGroupOption>
							<RadioGroupOption as="template" value="1" v-slot="{ active, checked }">
								<div
									:class="[active ? 'bg-pink-400' : '', checked ? 'bg-pink-400' : 'bg-white']"
									class="w-28 h-28 rounded-2xl flex items-center justify-center cursor-pointer drop-shadow-md"
								>
									<div class="flex flex-col">
										<RadioGroupLabel
											as="div"
											:class="checked ? 'text-white' : 'text-gray-900'"
										>
											<font-awesome-icon
												:icon="['fas', 'venus']"
												class="h-14"
												:class="[active ? 'animate-bounce' : '']"
											/>
										</RadioGroupLabel>
										<RadioGroupDescription
											as="p"
											:class="checked ? 'text-white' : 'text-gray-900'"
										>
											{{ $t('register.female') }}
										</RadioGroupDescription>
									</div>
								</div>
							</RadioGroupOption>
						</div>
					</RadioGroup>
				</div>
				<!--select date-->
				<div>
					<label
						for="date"
						class="block font-medium leading-6 text-gray-900 font-clashDisplay font-semibold"
					>
						{{ $t('register.date') }}
					</label>
					<div class="mt-1 relative rounded-md drop-shadow-md">
						<input
							type="date"
							name="date"
							id="date"
							class="mt-3 form-input block w-full pb-4 pt-4 border-0 text-center text-2xl sm:leading-5 rounded-md border-1"
							v-model="selectedDate"
						/>
					</div>
				</div>
				<!--select photo-->
				<div>
					<label
						class="block font-medium leading-6 text-gray-900 font-clashDisplay font-semibold"
						>{{ $t('register.photo') }}</label
					>
					<div
						class="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"
					>
						<div class="space-y-1 text-center">
							<svg
								class="mx-auto h-12 w-12 text-gray-400"
								stroke="currentColor"
								fill="none"
								viewBox="0 0 48 48"
								aria-hidden="true"
							>
								<path
									d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							<div class="flex text-gray-600">
								<label
									for="file-upload"
									class="relative font-clashDisplay font-semibold cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
								>
									<span>Upload a file</span>
									<input id="file-upload" name="file-upload" type="file" class="sr-only" />
								</label>
								<p class="pl-1">or drag and drop</p>
							</div>
							<p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
						</div>
					</div>
				</div>
				<div>
					<button
						@click="regsi"
						class="font-clashDisplay font-semibold w-full h-16 bg-red-200 flex mt-3 justify-center items-center rounded-lg drop-shadow-md lg:w-80 lg:h-10 md:hover:bg-red-300 md:transition md:duration-500 md:ease-in-out md:delay-150 md:hover:-translate-y-1 md:hover:scale-110"
					>
						{{ $t('register.suivant') }}
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.fond {
		filter: contrast(100%) brightness(100%);
		background:
		linear-gradient(189deg, rgba(241,126,184,1), rgba(0,0,0,0)),
			url("@/assets/noise.svg");
	}
</style>
