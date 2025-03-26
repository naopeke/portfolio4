import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { TECHNOLOGIES } from '../../../db-data';

@Component({
  selector: 'app-technologies',
  imports: [CardComponent],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {
  technologies = [...TECHNOLOGIES];
  tech = TECHNOLOGIES[0];
  title = TECHNOLOGIES[0].title;
  description = TECHNOLOGIES[0].description;
}
