import { defineStore } from 'pinia';
import { ref } from 'vue';
// type User = {
// 	id: number;
// 	name: string;
// 	email: string;
// 	email_verified_at: string;
// 	facebook_id: string;
// 	google_id: string;
//
// 	created_at: string;
// 	updated_at: string;
// 	pets: [
// 		{
// 			id: number;
// 			user_id: number;
// 			type: number;
// 			sex: number;
// 			birth_date: string;
// 			is_searching_partner: number;
// 			created_at: string;
// 			updated_at: string;
// 		}
// 	];
// };

//UserState is an object that contains the user data or null if the user is not logged in
// type UserState = {User | null};

export const useUserStore = defineStore('userStore', {
	// state
	state: () => ({
		user: ref( null ),
	}),
	// getters
	getters: {},
	// actions
	actions: {
		setUser(user: any) {
			this.user = user;
		},
	},
});
