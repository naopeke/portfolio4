import { Component } from '@angular/core';
import { EXPERIENCES } from '../../../db-data';
import { ExperienceCardComponent } from '../experience-card/experience-card.component';

@Component({
  selector: 'app-experience',
  imports: [ExperienceCardComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences = EXPERIENCES;
}
