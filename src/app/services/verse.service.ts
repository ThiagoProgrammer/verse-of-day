import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VerseService {

  constructor(private http: HttpClient) { }

  getRandomVerse() {
    return this.http.get(environment.apiUrl + '/verses/acf/random');
  }
}
