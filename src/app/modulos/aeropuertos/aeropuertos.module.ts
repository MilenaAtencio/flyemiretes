import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AeropuertosRoutingModule } from './aeropuertos-routing.module';
import { CreateComponent } from '../aeropuertos/create/create.component';
import { GetComponent } from '../aeropuertos/get/get.component';
import { EditComponent } from '../aeropuertos/edit/edit.component';


@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    GetComponent
  ],
  imports: [
    CommonModule,
    AeropuertosRoutingModule
  ]
})
export class AeropuertosModule { }
