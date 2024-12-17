import { Routes } from '@angular/router';
import { BeerListComponent } from './beer/beer-list/beer-list.component';
import { BeerAddComponent } from './beer/beer-add/beer-add.component';
import { BreweryListComponent } from './brewery/brewery-list/brewery-list.component';

import { BreweryAddComponent } from './brewery/brewery-add/brewery-add.component';
import { BreweryDetailComponent } from './brewery/brewery-detail/brewery-detail.component';
import { BeerDetailComponent } from './beer/beer-detail/beer-detail.component';
import { BeerEditComponent } from './beer/beer-edit/beer-edit.component';
import { BreweryEditComponent } from './brewery/brewery-edit/brewery-edit.component';

export const routes: Routes = [
    { path: '', redirectTo: '/beers', pathMatch: 'full' }, 
    { path: 'beer/:id', component: BeerDetailComponent },
    { path: 'beer/edit/:id', component: BeerEditComponent },
    { path: 'beers', component: BeerListComponent }, 
    { path: 'beers/add', component: BeerAddComponent },
    { path: 'breweries/add', component: BreweryAddComponent },
    { path: 'breweries/:id', component: BreweryDetailComponent }, 
    { path: 'brewery/edit/:id', component: BreweryEditComponent },
    { path: 'breweries', component: BreweryListComponent }, 
    { path: '**', redirectTo: '/beers' },
];
