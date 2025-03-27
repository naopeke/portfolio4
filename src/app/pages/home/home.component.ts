import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ExperienceComponent } from "../../components/experience/experience.component";
import { TechnologiesComponent } from "../../components/technologies/technologies.component";
import { AboutComponent } from "../../components/about/about.component";
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ExperienceComponent, ContactComponent, TechnologiesComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
