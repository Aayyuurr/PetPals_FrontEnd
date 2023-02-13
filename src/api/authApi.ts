import axios from 'axios';
// @ts-ignore
import Ilogin from './typesApi';

const basUrl = 'http://45.76.46.129/api/';

const authApi = axios.create({
	baseURL: basUrl,
	timeout: 10000,
});
authApi.defaults.headers.common['Content-Type'] = 'application/json';

export const loginUser= async (user:Ilogin) => {
	await getCSRFToken();
	const response = await authApi.post<Ilogin>('auth/login', user);
	return response.data;
}

export const getCSRFToken = async () => {
	await authApi.get('csrf-cookie');
}
