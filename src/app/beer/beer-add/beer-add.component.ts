import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BeerService } from '../../services/beer.service';
import { Router } from '@angular/router';
import { BreweryService } from '../../services/brewery.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beer-add',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './beer-add.component.html',
  styleUrl: './beer-add.component.css',
  standalone: true,
})
export class BeerAddComponent {
  beerForm: FormGroup;
  breweries: any[] = [];  

  constructor(
    private fb: FormBuilder,
    private beerService: BeerService,
    private breweryService: BreweryService,
    private router: Router
  ) {
    this.beerForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      abv: [0, [Validators.required, Validators.min(0)]],
      brewery_id: [null, Validators.required],  
      category_id: [0, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    this.loadBreweries();  
  }

  // Charge la liste des brasseries
  loadBreweries(): void {
    this.breweryService.getAllBreweries().subscribe({
      next: (data) => {
        this.breweries = data;
        console.log('Brasseries chargées:', this.breweries);  
      },
      error: (error) => console.error('Erreur lors du chargement des brasseries:', error),
    });
  }

  onSubmit(): void {
    if (this.beerForm.valid) {
      this.beerService.createBeer(this.beerForm.value).subscribe({
        next: (response) => {
          console.log('Bière ajoutée:', response);  
          this.router.navigate(['/beers']);  
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout de la bière:', error);
        }
      });
    }
}
}