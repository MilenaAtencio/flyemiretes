import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AeropuertosRoutingModule } from './aeropuertos-routing.module';
import { CreateComponent } from '../aeropuertos/create/create.component';
import { GetComponent } from '../aeropuertos/get/get.component';
import { EditComponent } from '../aeropuertos/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    GetComponent
  ],
  imports: [
    CommonModule,
    AeropuertosRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class AeropuertosModule { }
