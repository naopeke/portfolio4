import { Component, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ExperienceComponent } from "../../components/experience/experience.component";
import { TechnologiesComponent } from "../../components/technologies/technologies.component";
import { AboutComponent } from "../../components/about/about.component";
import { ContactComponent } from '../../components/contact/contact.component';
import { ScrollService } from '../../service/scroll.service';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ExperienceComponent, ContactComponent, TechnologiesComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private scrollService: ScrollService){
    this.scrollService.scrollRequests$.subscribe(section => {
      this.scrollToSection(section);
    });
  }

  @ViewChildren('aboutSection,contactSection') sections!: QueryList<ElementRef>;

  scrollToSection(sectionId: string) {
    const section = this.sections.find(s => s.nativeElement.id === sectionId);
    section?.nativeElement.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
    console.log('trying to scroll')
  }

}
