import { ApiRequestOptions } from '../shared/models/api';

export const apiUrl: string = 'http://localhost:3000/api/v1';

export const apiOptions: ApiRequestOptions = {
	baseUrl: apiUrl,
	headers: {
		'Content-Type': 'application/json',
	},
	params: {},
	responseType: 'json',
}