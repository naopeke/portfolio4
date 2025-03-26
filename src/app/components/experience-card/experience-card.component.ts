import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Experiences } from '../../model/experiences';

@Component({
  selector: 'app-experience-card',
  imports: [MatCardModule],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.css'
})
export class ExperienceCardComponent {
  @Input()
  experiences!: Experiences;

}
