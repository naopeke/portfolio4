import { ChangeDetectionStrategy,Component, inject } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ContactForm } from '../../model/contact';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
// import { environment } from '../../../environments/environment.development';
import { environment } from '../../../environments/environment';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-form',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule,MatButtonModule, MatDividerModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  private _snackBar = inject(MatSnackBar);
  durationInSeconds = 10;

  form: ContactForm = {
    name:'',
    email:'',
    message: ''
  }

  send(){
    console.log(this.form);

    emailjs.send(
      environment.emailjs.YOUR_SERVICE_ID as string, 
      environment.emailjs.YOUR_TEMPLATE_ID as string,
      {...this.form}, 
      {publicKey: environment.emailjs.YOUR_PUBLIC_KEY as string})
      .then(()=> {
        console.log('SUCCESS!');
        this.openSnackBar();
      },
      (error)=>{
        console.log('FAILED...', (error as EmailJSResponseStatus).text);
      }
    )
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

}

 
