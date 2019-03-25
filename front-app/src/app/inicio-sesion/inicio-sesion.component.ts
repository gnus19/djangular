import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ShowUsersService } from '../show-users.service';
import { UserManagerService } from '../user-manager.service';
import { ShowMessagesdService } from '../show-messagesd.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css'],
  providers: [ShowUsersService]
})
export class InicioSesionComponent implements OnInit {
  usuarios = [];
  //Datos del usuario que inicia sesion
  creds = {
    username: '',
    password: '',
    token: '',
  };
  token : any;
  log=false;

  constructor(private users: ShowUsersService, private http: HttpClient, private userService: UserManagerService, private msgService: ShowMessagesdService) { }

  ngOnInit() {
  }

  getUsers = (token) => {
  	this.users.getAllUsers(token).subscribe(
  		data => {
  			this.usuarios = data;
  		},
  		error => {
  			console.log(error);
  		}
  	)
  }

  onSubmit() {
    this.userService.loginUser(this.creds)
      .subscribe(
        result => {
          this.token = result;
          this.log=true
          this.creds.token = this.token.token
          //console.log('I logged in', this.token)
          this.getUsers(this.token.token);
          //console.log('creds', this.creds);
        },
        error => {
          this.msgService.set("Datos invalidos", "danger");
        }
      ); 
  }

}
