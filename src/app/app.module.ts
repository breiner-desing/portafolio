import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NadvarComponent } from './nadvar/nadvar.component';
import {MenuModule} from 'primeng/menu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { InicioComponent } from './componen/inicio/inicio.component';

import {TabMenuModule} from 'primeng/tabmenu';
import { SobreMiComponent } from './componen/sobre-mi/sobre-mi.component';
import { AllComponent } from './componen/all/all.component';

import {TableModule} from 'primeng/table';
import { TrabajosComponent } from './componen/trabajos/trabajos.component';
import { ContactoComponent } from './componen/contacto/contacto.component';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    NadvarComponent,
    InicioComponent,
    SobreMiComponent,
    AllComponent,
    TrabajosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    BreadcrumbModule,
    TabMenuModule,
    TableModule,
    CardModule
  ],
  providers: [MenuModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
