import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { MensajeSDComponent } from './mensaje-sd/mensaje-sd.component';

import { ShowMessagesdService } from './show-messagesd.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    RegistroComponent,
    MensajeSDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
