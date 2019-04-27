import { HttpHeaders, HttpParams } from '@angular/common/http';

export type ApiResponseTypes = 'json' | 'blob' | 'text';

export interface ApiOptions {
	baseUrl?: string;
	auth?: boolean;
	responseType?: ApiResponseTypes;
}

export interface ApiRequestOptions {
	baseUrl?: string;
	auth?: boolean;
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