import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router"

import { UserManagerService } from '../user-manager.service';
import { ShowMessagesdService } from '../show-messagesd.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
	registro;

  constructor(private router: Router, private userService: UserManagerService, private msgService: ShowMessagesdService) { }

  ngOnInit() {
  	this.registro = {
  		username: '',
  		password: '',
  		first_name: '',
  		last_name: '',
  		email: '',
  		posicion: '',
  	}
  }

  onSubmit() {
  	this.userService.registerUser(this.registro)
      .subscribe(
        response => {
          //alert("Se registro: " + this.registro.username + " \nNombre: " + this.registro.first_name);
          this.msgService.set("Usuario registrado exitosamente", "success");
          this.router.navigate(['/sesion'])
        },
        error => {
        	console.log("Error: ", error);
          this.msgService.set("Error: usuario existente o falta rellenar campos", "danger");
        }
      ); 
  }
}

