import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { ModalProximoComponent } from './modal-proximo/modal-proximo.component';
import { CorregedoriaComponent } from './corregedoria/corregedoria.component';
import {MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalfimComponent } from './modalfim/modalfim.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalProximoComponent,
    CorregedoriaComponent,
    ModalfimComponent,
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatDialogContent,
    MatRadioModule,
    BrowserAnimationsModule,
    HttpClientModule
    
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
