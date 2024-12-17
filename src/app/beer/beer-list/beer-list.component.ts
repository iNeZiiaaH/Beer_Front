import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class BeerListComponent implements OnInit {
  beers: any[] = [];

  constructor(private beerService: BeerService) {}

  ngOnInit(): void {
    this.beerService.getAllBeers().subscribe((data) => {
      this.beers = data;
    });
  }
}