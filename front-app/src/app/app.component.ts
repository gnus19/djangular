import { Component } from '@angular/core';
import { ShowUsersService } from './show-users.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShowUsersService]
})
export class AppComponent {
  title = 'Gestor Karaota';

  constructor(private users: ShowUsersService, private http: HttpClient) {  
    
  }
}
