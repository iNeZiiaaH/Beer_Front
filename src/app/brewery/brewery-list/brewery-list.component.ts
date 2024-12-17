import { Component, OnInit } from '@angular/core';
import { BreweryService } from '../../services/brewery.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

declare var bootstrap: any;

@Component({
  imports: [CommonModule, RouterModule], 
  selector: 'app-brewery-list',
  templateUrl: './brewery-list.component.html',
  styleUrl: './brewery-list.component.css',
})
export class BreweryListComponent implements OnInit {
  breweries: any[] = [];
  selectedBrewery: any = null;
  successMessage: string | null = null;  
  
  constructor(private breweryService: BreweryService) {}
  
  ngOnInit(): void {
    this.loadBreweries(); 
  }
  
  // Charge toutes les brasseries
  loadBreweries(): void {
    this.breweryService.getAllBreweries().subscribe({
      next: (data) => {
        this.breweries = data;
      },
      error: (error) => console.error('Erreur:', error),
    });
  }
  
  openDeleteModal(brewery: any): void {
    this.selectedBrewery = brewery;
    
    const modal = document.getElementById('deleteModal');
    if (modal) {
      const modalInstance = new bootstrap.Modal(modal); 
      modalInstance.show();
    }
  }
  
  // Confirme la suppression
  confirmDelete(): void {
    if (this.selectedBrewery) {
      this.breweryService.deleteBrewery(this.selectedBrewery.id_brewery).subscribe({
        next: () => {
          this.successMessage = `La brasserie "${this.selectedBrewery.name}" a été supprimée avec succès.`;
          this.loadBreweries(); 
          this.selectedBrewery = null;
          
          setTimeout(() => {
            this.successMessage = null;
          }, 3000);
        },
        error: (error) => console.error('Erreur lors de la suppression:', error),
      });
    }
  }
}
