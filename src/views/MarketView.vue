<script lang="ts" setup>
	import { useUserStore } from '@/stores/userStore';

	import { logoutUser } from '@/api/authApi';
	import { useMutation } from 'vue-query';
	const userStore = useUserStore();
	const { mutate, isLoading } = useMutation(() => logoutUser(), {
		onSuccess: () => {
			//delete cookies
			document.cookie = 'petpals_session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
			document.cookie = 'XSRF-TOKEN=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

			userStore.setUser(null);
		},
	});
	const onLogout = () => {
		mutate();
	};
</script>

<template>
	<pre>{{ userStore.user }}</pre>
	<button @click="onLogout">LogOut</button>
</template>

<style lang="scss" scoped></style>
