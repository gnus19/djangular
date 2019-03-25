import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagerService {
	token = ''
	baseurl = "http://127.0.0.1:8000/";
	httpHeaders: HttpHeaders;

  constructor(private http: HttpClient) { }

  registerUser(registro) {
  	return this.http.post(this.baseurl+'api/users/', registro)
  }
  loginUser(creds) {
  	return this.http.post(this.baseurl+'login/', creds)
  }
}
