import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  /**
   * Encode an object to a query string and returns a string with result.
   *
   * @param obj Keys to encode
   *
   * @return The resulting query string
   */
  encodeQuery(obj: { [s: string]: any }): string {
    var str = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        str.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
      }
    }
    return str.join('&');
  }
}
