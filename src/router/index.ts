import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { useUserStore } from '@/stores/userStore';
import middlewarePipeline from '@/router/middlewarePipeline';
import requireAuth from '@/router/authMidelwar';
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('../views/LoginView.vue'),
		},
		{
			path: '/register',
			name: 'register',
			component: () => import('../views/RegisterView.vue'),
		},
		{
			path: '/market',
			name: 'market',
			component: () => import('../views/MarketView.vue'),
			meta: {
				middleware: [requireAuth],
			},
		},
		{
			path: '/addanimal',
			name: 'addAnimal',
			component: () => import('../views/AddAnimalView.vue'),
			// meta: {
			// 	middleware: [requireAuth],
			// }
		}
	],
});

router.beforeEach((to, from, next) => {
	const authStore = useUserStore();
	if (!to.meta.middleware) {
		return next();
	}
	const middleware = to.meta.middleware as any;
	const context = { to, from, next, authStore };
	return middleware[0]({
		...context,
		next: middlewarePipeline(context, middleware, 1),
	});
});
export default router;
