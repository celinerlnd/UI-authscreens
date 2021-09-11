import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl ='https://api.staging.tarsoft.co/api';


  constructor(private http: HttpClient) { }

}
