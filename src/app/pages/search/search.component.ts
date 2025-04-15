import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-search',
  imports: [GoogleMapsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent {
  center: google.maps.LatLngLiteral = { lat: 32.9850, lng: -96.9124 };
  zoom = 12;

  onSearchClick() {
    console.log('Search button clicked mf!');
  }
}
