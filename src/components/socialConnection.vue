<script setup lang="ts">
	import FacebookLogo from '@/components/logosAndAssets/facebookLogo.vue';
	import GoogleLogo from '@/components/logosAndAssets/googleLogo.vue';

/*	async function onGoogleLogin() {
		// Load the Google OAuth2 API client
		await gapi.load('auth2', () => {
			gapi.auth2.init({
				client_id: '549298079364-kvu65e3kv4edsbdqj76jv8fcq92va8un.apps.googleusercontent.com',
			});
		});

		// Open the Google OAuth2 consent screen in a popup window
		const params = new URLSearchParams({
			client_id: '549298079364-kvu65e3kv4edsbdqj76jv8fcq92va8un.apps.googleusercontent.com',
			redirect_uri: 'http://127.0.0.1:5173/market',
			reponse_type: 'token id_token',
			scope: 'openid email profile',
		});
		const consentUrl = `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
		const consentWindow = window.open(
			consentUrl,
			'google_oauth2_consent',
			'width=500,height=600'
		);

		// Wait for the user to complete the OAuth2 flow and return to the redirect URI
		const redirectUri = 'http://127.0.0.1:5173/market';
		const authResult = await new Promise((resolve, reject) => {
			window.addEventListener('message', (event) => {
				if (
					event.origin === window.location.origin &&
					event.source === consentWindow &&
					event.data.type === 'oauth2_result' &&
					event.data.redirect_uri === redirectUri
				) {
					resolve(event.data.auth_result);
					consentWindow.close();
				}
			});
		});

		// Handle successful authentication
		const accessToken = authResult.access_token;
		const idToken = authResult.id_token;
		// handle successful authentication
	}*/

/*	function onGoogleLogin() {
		window.onload = function () {
			google.accounts.id.initialize({
				client_id: '549298079364-kvu65e3kv4edsbdqj76jv8fcq92va8un.apps.googleusercontent.com',
				callback: handleCredentialResponse,
			});
			google.accounts.id.prompt();
		};
	}*/


/*	async function onGoogleLogin() {
		// Initialize the Google Sign-In API client
		await gapi.load('auth2', () => {
			gapi.auth2.init({
				client_id: '549298079364-kvu65e3kv4edsbdqj76jv8fcq92va8un.apps.googleusercontent.com',
			});
		});

		// Sign in the user with the Google Sign-In API
		const auth = gapi.auth2.getAuthInstance();
		try {
			const googleUser = await auth.signIn();
			const idToken = await googleUser.getAuthResponse().id_token;
			console.log(idToken)
			// handle successful authentication
		} catch (error) {
			// handle authentication error
		}
	}*/
</script>

<template>
	<div class="flex flex-col justify-center items-center gap-3">
		<!--		div with line and or in middel-->
		<div>
			<h2>{{ $t('message.ou') }}</h2>
		</div>
		<button

			class="w-72 h-8 bg-white flex justify-center items-center rounded-lg drop-shadow-md lg:w-80 lg:h-10 md:hover:bg-gray-100 md:transition md:duration-500 md:ease-in-out md:delay-150 md:hover:-translate-y-1 md:hover:scale-110"
		>
			<span><GoogleLogo /></span>{{ $t('message.loginWith', ['Google']) }}
		</button>
		<button
			class="w-72 text-white h-8 bg-blue-500 flex justify-center items-center rounded-lg drop-shadow-md lg:w-80 lg:h-10 md:hover:bg-blue-600 md:transition md:duration-500 md:hover:text-white md:ease-in-out md:delay-150 md:hover:-translate-y-1 md:hover:scale-110"
		>
			<span><FacebookLogo /> </span>{{ $t('message.loginWith', ['Facebook']) }}
		</button>
	</div>
</template>
