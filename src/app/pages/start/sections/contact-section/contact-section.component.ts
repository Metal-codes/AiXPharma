import {Component, OnInit} from '@angular/core';
import {latLng, Layer, marker, popup, tileLayer} from 'leaflet';
import * as $ from 'jquery';
@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {

  // Open Street Map definitions
  LAYER_OSM = tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 25, attribution: 'Open Street Map'});

  // Values to bind to Leaflet Directive
  options = {
    layers: [this.LAYER_OSM],
    zoom: 17,
    center: latLng(50.8699128, 20.6122257)
  };

  markers: Layer[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.addMarker();
  }

  private addMarker() {
    this.markers.push(
      marker([50.869955, 20.6107172]).bindPopup(popup().setLatLng([50.869958, 20.6107172]).setContent('AiXPharma\n' +
        'ul. Urzędnicza 9A/35\n' +
        '25-729 Kielce'))
    );
  }

  showPhoneNumber(): void {
    $('#buttonNumber').hide();
    $('#number').text('+48 222 222 222');
  }
  showEmail(): void {
    $('#buttonEmail').hide();
    $('#email').text('aixpharma@gmail.comm');
  }
}
