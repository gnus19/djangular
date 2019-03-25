import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShowUsersService {

	token = ''
	baseurl = "http://127.0.0.1:8000/api";
	httpHeaders: HttpHeaders;
  constructor(private http: HttpClient) {  }

  getAllUsers(token): Observable<any>{
  	console.log('Token en servicio', token)
  	this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token '+ token})

  	return this.http.get(this.baseurl + '/users/', {headers: this.httpHeaders});
  }
}
