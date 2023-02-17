import axios from 'axios';
import type { loginData, registerData } from './types';


const basUrl = 'https://api.pet-pals.site/api/';

export const authApi = axios.create({
	baseURL: basUrl,
	timeout: 10000,
	withCredentials: true,
});
authApi.defaults.headers.common['Content-Type'] = 'application/json';
authApi.defaults.headers.common['Accept'] = 'application/json';
//get CSRF token
export const getCSRFToken = async () => {
	const test= await authApi.get('csrf-cookie');
	console.log(test.headers.toString())
	return test;
};



//interface

//login interface


//login function
export const loginUser = async (user: loginData) => {
	//get CSRF token from csrf-cookie and give it to the login request
	// await getCSRFToken();
	const data=await authApi.post<loginData>('auth/login', user);

	return data;

};

//google login function
export const googleLoginUser = async () => {
	//get CSRF token from csrf-cookie and give it to the login request
	await getCSRFToken();
	const data=await authApi.get('auth/google');

	return data;


}

//register function
export const registerUser = async (user: registerData) => {
	await getCSRFToken();
	const data=await authApi.post<registerData>('auth/register', user);

	return data;

}
