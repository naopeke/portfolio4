import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-hero',
  imports: [MatIconModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  @ViewChild('heroTitle') heroTitle!: ElementRef<HTMLHeadElement>;

  focusTitle(){
    this.heroTitle.nativeElement.focus();
  }
}
