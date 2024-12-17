import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BeerService } from '../../services/beer.service';
import { RouterModule } from '@angular/router';

declare var bootstrap: any;
@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class BeerListComponent implements OnInit {
  beers: any[] = [];
  selectedBeer: any = null;
  successMessage: string | null = null;  
  
  constructor(private beerService: BeerService) {}

  ngOnInit(): void {
    this.loadBeers(); 
  }

  // Charge toutes les bières
  loadBeers(): void {
    this.beerService.getAllBeers().subscribe({
      next: (data) => {
        this.beers = data;
      },
      error: (error) => console.error('Erreur:', error),
    });
  }

  // modal 
  openDeleteModal(beer: any): void {
    this.selectedBeer = beer;
    const modal = document.getElementById('deleteModal');
    if (modal) {
      const modalInstance = new bootstrap.Modal(modal); 
      modalInstance.show();
    }
  }

  // Confirme la suppression
  confirmDelete(): void {
    if (this.selectedBeer) {
      this.beerService.deleteBeer(this.selectedBeer.id_beer).subscribe({
        next: () => {
          this.successMessage = `La bière "${this.selectedBeer.name}" a été supprimée avec succès.`;
          this.loadBeers(); 
          this.selectedBeer = null;
          
          setTimeout(() => {
            this.successMessage = null;
          }, 8000);
        },
        error: (error) => console.error('Erreur lors de la suppression:', error),
      });
    }
  }
}