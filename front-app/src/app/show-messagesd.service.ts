import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowMessagesdService {
	private mensaje = [];
	private nuevo;

  constructor() { }

  set(mensaje, tipo) {
  	this.nuevo = new Mensaje();
  	this.nuevo.texto = mensaje;
  	this.nuevo.tipo = tipo
  	this.mensaje.push(this.nuevo);
  }

  getMsg() {
  	return this.mensaje;
  }
  deleteMsg() {
  	this.mensaje.pop();
  }
  limpiar() {
  	this.mensaje.length = 0;
  }
}

export class Mensaje {
	texto: String;
	tipo: String;
}
