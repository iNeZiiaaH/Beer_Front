import { Component } from '@angular/core';
import { BreweryService } from '../../services/brewery.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brewery-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './brewery-detail.component.html',
  styleUrl: './brewery-detail.component.css'
})
export class BreweryDetailComponent {
  brewery: any = null;  
  breweryId!: number;  
  
  constructor(
    private route: ActivatedRoute,
    private breweryService: BreweryService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    // Récup l'ID de la route
    this.breweryId = +this.route.snapshot.params['id'];
    console.log('ID de la brasserie:', this.breweryId);  
    
    this.breweryService.getBreweryById(this.breweryId).subscribe({
      next: (data) => {
        console.log('Données API reçues:', data); 
        this.brewery = data;
      },
      error: (error) => {
        console.error('Erreur API:', error);  
        this.brewery = null;
      },
    });
  }
  
  goBack(): void {
    this.router.navigate(['/breweries']);
  }
}
