import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { IngresosRegisterComponent } from './ingresos-register/ingresos-register.component';
import { EgresosRegisterComponent } from './egresos-box/egresos-register.component';
import { FormsModule } from '@angular/forms';
import { RevenuesService } from './services/RevenuesService.service';
import { ExpendsService } from './services/ExpendsService.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    IngresosRegisterComponent,
    EgresosRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RevenuesService, ExpendsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
