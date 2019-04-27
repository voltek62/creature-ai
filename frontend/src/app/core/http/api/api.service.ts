import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEvent } from '@angular/common/http'
import { Observable } from 'rxjs';
import { UtilService } from '../../services/util/util.service';
import { HttpClientOptions } from '../../../shared/models/http';
import { ApiRequestOptions } from '../../../shared/models/api';
import { apiOptions } from '../../../configs/app-settings.config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api: string = apiOptions.baseUrl;

  constructor(
    private httpClient: HttpClient,
    private utilService: UtilService
  ) { }

  private buildOptions(options: ApiRequestOptions = {}): HttpClientOptions {
    const opts: ApiRequestOptions = Object.assign({}, apiOptions, options);

    if (opts.auth) opts.headers['Authorization'] = 'Bearer ' + '';

    return {
      headers: new HttpHeaders(opts.headers),
      params: new HttpParams(opts.params),
      observe: 'body',
      reportProgress: true,
      responseType: 'json',
      withCredentials: opts.auth
    }
  }

  private getUrl(options: ApiRequestOptions = {}): string {
    return Object.assign({}, apiOptions, options).baseUrl;
  }

  get<T>(options: ApiRequestOptions = {}): Observable<T> {
    return this.httpClient.get<T>(this.getUrl(options), this.buildOptions(options));
  }

  post<T>(body: any, options: ApiRequestOptions = {}): Observable<T> {
    return this.httpClient.post<T>(this.getUrl(options), body, this.buildOptions(options));
  }

  put<T>(body: any, options: ApiRequestOptions = {}): Observable<T> {
    return this.httpClient.put<T>(this.getUrl(options), body, this.buildOptions(options));
  }

  patch<T>(body: any, options: ApiRequestOptions = {}): Observable<T> {
    return this.httpClient.patch<T>(this.getUrl(options), body, this.buildOptions(options));
  }

  delete<T>(body: any, options: ApiRequestOptions = {}): Observable<T> {
    return this.httpClient.delete<T>(this.getUrl(options), this.buildOptions(options));
  }
}
