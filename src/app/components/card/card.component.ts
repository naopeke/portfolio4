import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { TECHNOLOGIES } from '../../../db-data';

@Component({
  selector: 'app-card',
  imports: [MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  technologies = TECHNOLOGIES;

  @Input()
  icon: string = '';
  
  @Input() 
  title: string = '';

  @Input()
  description: string = '';

}
