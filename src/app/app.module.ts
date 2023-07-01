import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DinosaursComponent } from './dinosaurs/dinosaurs.component';
import { DinosaurInputComponent } from './dinosaurs/dinosaurs-inpunt.component';

@NgModule({
  declarations: [
    AppComponent,
    DinosaursComponent,
    DinosaurInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
