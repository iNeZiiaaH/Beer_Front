import { Component } from '@angular/core';
import { BeerService } from '../../services/beer.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beer-detail',
  imports: [CommonModule],
  templateUrl: './beer-detail.component.html',
  styleUrl: './beer-detail.component.css'
})
export class BeerDetailComponent {
  beer: any;

  constructor(
    private beerService: BeerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Récupére l'ID 
    const beerId = +this.route.snapshot.paramMap.get('id')!;
    
    this.beerService.getBeerById(beerId).subscribe((data) => {
      this.beer = data;
    });
  }
}
