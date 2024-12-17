import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BeerService } from '../../services/beer.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BreweryService } from '../../services/brewery.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beer-edit',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './beer-edit.component.html',
  styleUrl: './beer-edit.component.css'
})
export class BeerEditComponent implements OnInit {
  beerForm: FormGroup;
  beerId: number = 0;
  beer: any;
  breweries: any[] = [];

  constructor(
    private beerService: BeerService,
    private breweryService: BreweryService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    // Initialise le formulaire 
    this.beerForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      abv: ['', [Validators.required, Validators.min(0)]],
      brewery_id: ['', Validators.required],
      category_id: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.beerId = Number(this.route.snapshot.paramMap.get('id'));  
    if (this.beerId) {
      this.loadBeer();
      this.loadBreweries();
    }
  }

  // Charge les données de la bière
  loadBeer(): void {
    this.beerService.getBeerById(this.beerId).subscribe((data) => {
      this.beer = data;
      this.beerForm.patchValue({
        name: this.beer.name,
        description: this.beer.description,
        abv: this.beer.abv,
        brewery_id: this.beer.brewery_id,
        category_id: this.beer.category_id
      });
    });
  }

  // Charge les brasseries 
  loadBreweries(): void {
    this.breweryService.getAllBreweries().subscribe((data) => {
      this.breweries = data;
    });
  }

  onSubmit(): void {
    if (this.beerForm.valid) {
      this.beerService.updateBeer(this.beerId, this.beerForm.value).subscribe(
        () => {
          this.router.navigate(['/beers']);
        },
        (error) => {
          console.error('Erreur lors de la mise à jour', error);
        }
      );
    }
  }
}
