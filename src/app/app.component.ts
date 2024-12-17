import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BreweryModule } from './brewery/brewery.module';

@Component({
  selector: 'app-root',
  imports: [
    RouterModule, 
    NavbarComponent,
    BreweryModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'beer_front';
}
