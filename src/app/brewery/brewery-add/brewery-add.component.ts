import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BreweryService } from '../../services/brewery.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brewery-add',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './brewery-add.component.html',
  styleUrl: './brewery-add.component.css'
})
export class BreweryAddComponent {
  breweryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private breweryService: BreweryService,
    private router: Router
  ) {
    this.breweryForm = this.fb.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.breweryForm.valid) {
      this.breweryService.createBrewery(this.breweryForm.value).subscribe({
        next: (response) => {
          console.log('Brasserie ajoutée:', response); 
          this.router.navigate(['/breweries']); 
        },
        error: (error) => console.error('Erreur lors de l\'ajout de la brasserie:', error),
      });
    }
  }
}
