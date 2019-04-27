import { ApiOptions } from '../shared/models/api';

export const apiUrl: string = 'http://localhost:3000/api/v1';

export const apiOptions: ApiOptions = {
	baseUrl: apiUrl,
	responseType: 'json',
	auth: false
}