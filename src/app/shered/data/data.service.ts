import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError, Subject, of } from 'rxjs';
import { catchError, map, mergeMap, retryWhen, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UrlService } from '../url.service';
import { Response } from '../response';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cache: { [endpoint: string]: unknown } = {};

  constructor(private httpClient: HttpClient,
    private urlService: UrlService,
    private router: Router) { }

  get<T>(endpoint: string, options?: { params?: any, cached?: boolean }): Observable<T> {
    if (options && options.cached && this.cache[endpoint]) {
      return of(this.cache[endpoint] as T);
    } else {
      return this.httpClient.get<T>(this.urlService.fullUrl(endpoint));
    }
  }

  getFile(endpoint: string, params?: any): Observable<Blob> {

    const options = {};
    options['params'] = params;
    options['responseType'] = 'blob';

    return this.httpClient.get<Blob>(this.urlService.fullUrl(endpoint), options);
  }


  post<RQ, RS>(endpoint: string, body: RQ): Observable<RS> {
    return this.httpClient.post<Response<RS>>(this.urlService.fullUrl(endpoint), body, this.createHttpOptions())
      .pipe(map(response => response.data));
  }

  put<RQ, RS>(endpoint: string, body: RQ): Observable<RS> {
    return this.httpClient.put<Response<RS>>(this.urlService.fullUrl(endpoint), body, this.createHttpOptions())
      .pipe(map(response => response ? response.data : null));
  }

  private createHttpOptions(params?: HttpParams | { [param: string]: string | string[] }): unknown {
    const headers: { [key: string]: string } = {
      'Content-Type': 'application/json'
    };

    return {
      headers: new HttpHeaders(headers),
      withCredentials: true,
      params: params
    };
  }

  private log(message: string) {
    if (!environment.production) {
      console.log(`[Authentication] ${message}`);
    }
  }
}
