import axios from 'axios';
const basUrl = 'http://45.76.46.129/api/';

const authApi = axios.create({
	baseURL: basUrl,
	timeout: 10000,
});
authApi.defaults.headers.common['Content-Type'] = 'application/json';

interface loginData {
	email: string;
	password: string;
}

export const loginUser= async (user:loginData) => {
	await getCSRFToken();
	const response = await authApi.post<loginData>('auth/login', user);
	return response.data;
}

export const getCSRFToken = async () => {
	await authApi.get('csrf-cookie');
}
