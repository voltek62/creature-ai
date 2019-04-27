import { HttpClient, HttpHeaders, HttpParams, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiOptions } from '../../configs/app-settings.config';
import { ApiRequestOptions } from '../../shared/models/api';
import { HttpClientOptions } from '../../shared/models/http';

export function applicationHttpClientCreator(http: HttpClient) {
  return new ApplicationHttpService(http);
}

@Injectable({
  providedIn: 'root'
})
export class ApplicationHttpService {
  apiUrl: string = apiOptions.baseUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  private buildOptions(options: ApiRequestOptions = {}, body?: Object): HttpClientOptions {
    const opts: ApiRequestOptions = {
      headers: Object.assign({}, apiOptions.headers, options.headers),
      params: Object.assign({}, apiOptions.params, options.params)
    }

    return {
      body,
      headers: new HttpHeaders(opts.headers),
      params: new HttpParams(opts.params),
      observe: 'body',
      reportProgress: true,
      responseType: 'json',
      withCredentials: false
    }
  }

  private request<T>(
    method: string = 'GET',
    endpoint: string,
    body: Object,
    options: ApiRequestOptions = {}
  ): Observable<T> {
    return this.httpClient.request<T>(
      method,
      (options.baseUrl || this.apiUrl) + endpoint,
      this.buildOptions(options, body)
    )
  }

  get<T = any>(endpoint: string, options: ApiRequestOptions = {}): Observable<T> {
    return this.request<T>('GET', endpoint, null, options);
  }

  post<T = any>(endpoint: string, body: Object, options: ApiRequestOptions = {}): Observable<T> {
    return this.request<T>('POST', endpoint, body, options);
  }

  put<T = any>(endpoint: string, body: Object, options: ApiRequestOptions = {}): Observable<T> {
    return this.request<T>('PUT', endpoint, body, options);
  }

  patch<T = any>(endpoint: string, body: Object, options: ApiRequestOptions = {}): Observable<T> {
    return this.request<T>('PATCH', endpoint, body, options);
  }

  delete<T = any>(endpoint: string, options: ApiRequestOptions = {}): Observable<T> {
    return this.request<T>('DELETE', endpoint, null, options);
  }
}