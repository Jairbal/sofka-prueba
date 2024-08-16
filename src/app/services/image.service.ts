import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  isValidImageUrl(url: string): Observable<boolean> {
    return this.http.head(url, { observe: 'response' }).pipe(
      map(response => {
        const contentType = response.headers.get('Content-Type');
        return contentType?.startsWith('image/') || false;
      })
    );
  }
}
