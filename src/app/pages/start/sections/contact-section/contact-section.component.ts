import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {MapService} from '../../../../map.service';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {

  @ViewChild('number', {static: false}) number: ElementRef;
  @ViewChild('buttonNumber', {static: false}) buttonNumber: ElementRef;
  @ViewChild('email', {static: false}) email: ElementRef;
  @ViewChild('buttonEmail', {static: false}) buttonEmail: ElementRef;
  private map: any;
  private marker: any;

  constructor(private mapService: MapService, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    if (this.mapService.L) {
      this.setupMap();
    }
  }

  private setupMap() {
    this.map = this.mapService.L.map('contactmap').setView([50.8699128, 20.6122257], 17);
    this.mapService.L.tileLayer(
      'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
      {
        maxZoom: 25,
        attribution:
          'copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>,' +
          ' Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
      }
    ).addTo(this.map);
    this.marker = this.mapService.L.marker([50.869955, 20.6107172]).addTo(this.map);
    this.marker.bindPopup('AiXPharma<br>' +
      'ul. Urzędnicza 9A/35<br>' +
      '25-729 Kielce').openPopup();
  }

  showPhoneNumber(): void {
    this.renderer.setStyle(this.buttonNumber.nativeElement, 'display', 'none');
    this.number.nativeElement.innerText = '+48 222 222 222';
  }

  showEmail(): void {
    this.renderer.setStyle(this.buttonEmail.nativeElement, 'display', 'none');
    this.email.nativeElement.innerText = 'aixpharma@gmail.comm';
  }
}
