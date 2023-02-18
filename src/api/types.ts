export interface loginData {
	data: any;
	email: string;
	password: string;
}

export interface registerData {
	name: string;
	email: string;
	password: string;
	password_confirmation: string;
}

// response interface
export interface loginResponse {
	success: boolean;
	message: string;
	data: {
		token: string;
	};
}


export interface registerResponse {
	success: boolean;
	message: string;
	data: object;
}


export interface userResponse {
	success: boolean;
	message: string;
	data: object | null;
}
