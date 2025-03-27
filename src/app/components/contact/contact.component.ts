import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-contact',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
