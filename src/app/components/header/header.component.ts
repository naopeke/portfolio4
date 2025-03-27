import { Component, ViewChild } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from '../../pages/home/home.component';
import { ScrollService } from '../../service/scroll.service';

@Component({
  selector: 'app-header',
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private scrollService: ScrollService) {}

  scrollTo(section: string) {
    this.scrollService.requestScroll(section);
  }
 
}
