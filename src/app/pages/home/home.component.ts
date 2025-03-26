import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ExperienceComponent } from "../../components/experience/experience.component";
import { ContactComponent } from '../contact/contact.component';
import { TechnologiesComponent } from "../../components/technologies/technologies.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ExperienceComponent, ContactComponent, TechnologiesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
