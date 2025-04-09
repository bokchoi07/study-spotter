import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-search',
  imports: [GoogleMapsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent {
  center: google.maps.LatLngLiteral = { lat: 24.886, lng: -70.268 };
  zoom = 4;
}
