import { Component, Input } from "@angular/core";

@Component({
  selector: 'dino-tag',
  templateUrl: './dinosaurs.component.html'
})
export class DinosaursComponent {
  @Input() dinoList: string[];
}
