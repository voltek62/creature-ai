export type ApiResponseTypes = 'json' | 'blob' | 'text';

export interface ApiRequestOptions {
	baseUrl?: string;
	headers?: string | {
		[header: string]: string | string[];
	};
	params?: {
		[param: string]: string | string[];
	};
	responseType?: ApiResponseTypes;
}

export interface ApiResponse<T> {
	message: string,
	data: T
}