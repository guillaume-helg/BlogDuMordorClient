import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';


@Component({
  selector: 'app-ecriture-form',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './ecriture-form.component.html',
  styleUrl: './ecriture-form.component.css'
})
export class EcritureFormComponent {
  articleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.articleForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.articleForm.valid) {
      // Envoyez les données de l'article au serveur ou effectuez d'autres actions ici
      console.log(this.articleForm.value);
    }
  }
}


