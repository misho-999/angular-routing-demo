import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  // readonly serverLocation = environment.serverLocation || `${location.origin}/api`;
  readonly serverLocation = environment.serverLocation || `${location.origin}/api`;

  constructor() { }

  fullUrl(endpoint: string): string {
    return `${this.serverLocation}/${endpoint}`;
  }
}
