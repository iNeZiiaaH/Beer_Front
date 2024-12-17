import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BreweryService } from '../../services/brewery.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brewery-edit',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './brewery-edit.component.html',
  styleUrl: './brewery-edit.component.css'
})
export class BreweryEditComponent {

  breweryForm: FormGroup;
  breweryId: number = 0;
  brewery: any;

  constructor(
    private breweryService: BreweryService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    // Initialise le formulaire 
    this.breweryForm = this.fb.group({
      name: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.breweryId = Number(this.route.snapshot.paramMap.get('id')); 
    if (this.breweryId) {
      this.loadBrewery();  
    }
  }

  // Charge les données de la brasserie
  loadBrewery(): void {
    this.breweryService.getBreweryById(this.breweryId).subscribe((data) => {
      this.brewery = data;
      this.breweryForm.patchValue({
        name: this.brewery.name,
        country: this.brewery.country
      });
    });
  }

  onSubmit(): void {
    if (this.breweryForm.valid) {
      this.breweryService.updateBrewery(this.breweryId, this.breweryForm.value).subscribe(
        () => {
          this.router.navigate(['/breweries']);  
        },
        (error) => {
          console.error('Erreur lors de la mise à jour', error);
        }
      );
    }
  }
}
