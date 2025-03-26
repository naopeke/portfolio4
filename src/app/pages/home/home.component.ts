import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { CardComponent } from "../../components/card/card.component";
import { ExperienceComponent } from "../../components/experience/experience.component";
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, CardComponent, ExperienceComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
