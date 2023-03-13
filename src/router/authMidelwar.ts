import type { NavigationGuardNext } from 'vue-router';
import { getUser } from '../api/authApi';
export default async function requireAuth({
	next,
	authStore,
}: {
	next: NavigationGuardNext;
	authStore: any;
}) {
	try {
		const response = await getUser();
		const user = response?.data?.user;
		authStore.setUser(user);
		if (!user) {
			return next({
				name: 'login',
			});
		}
	} catch (error) {
		document.location.href = '/login';
	}
	return next();
}
