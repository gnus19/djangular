import { Component, OnInit } from '@angular/core';
import { ShowMessagesdService } from '../show-messagesd.service';

@Component({
  selector: 'app-mensaje-sd',
  templateUrl: './mensaje-sd.component.html',
  styleUrls: ['./mensaje-sd.component.css']
})
export class MensajeSDComponent implements OnInit {
	mensaje = "";
	tipo = "danger";
	activo = false;

  constructor(private msgService: ShowMessagesdService) { }

  ngOnInit() {
  }

  msg() {
  	return this.msgService.getMsg();
  }
  cerrarMsg() {
  	this.msgService.deleteMsg();
  }

}
