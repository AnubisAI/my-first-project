import { Component } from "@angular/core";

@Component( {
  selector: 'dino-input',
  templateUrl: './dinosaurs-input.component.html',
  styleUrls: ['./dinosaurs-input.component.css']
})

export class DinosaurInputComponent {
  onCreateDino() {
    console.log('Create a Dino here!')
  }
}
