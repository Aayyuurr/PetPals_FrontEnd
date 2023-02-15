import axios from 'axios';
const basUrl = 'https://api.pet-pals.site/api/';

const authApi = axios.create({
	baseURL: basUrl,
	timeout: 10000,
});
authApi.defaults.headers.common['Content-Type'] = 'application/json';

interface loginData {
	email: string;
	password: string;
}

export const loginUser = async (user: loginData) => {
	//get CSRF token from csrf-cookie and give it to the login request
	const csrfToken = await getCSRFToken();
	const response = await authApi.post<loginData>('auth/login', user,
		{
			headers: {
				'X-CSRF-TOKEN': csrfToken,
			}
		});
	return response.data;

};

//get CSRF token from csrf-cookie and set it in the header
export const getCSRFToken = async () => {
	const response = await authApi.get('csrf-cookie');
	return response.data;
};
