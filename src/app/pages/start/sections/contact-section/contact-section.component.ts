import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {MapService} from '../../../../map.service';
import {TranslateService} from '@ngx-translate/core';

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

  constructor(private mapService: MapService,
              private renderer: Renderer2,
              private translate: TranslateService) {
  }

  ngOnInit(): void {
    if (this.mapService.L) {
      this.setupMap();
    }
  }

  private setupMap() {
    this.map = this.mapService.L.map('contactmap').setView([50.8699128, 20.6122257], 17);
    this.mapService.L.tileLayer(
      'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
      {
        maxZoom: 25,
        attribution:
          'copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>,' +
          ' Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
      }
    ).addTo(this.map);
    this.marker = this.mapService.L.marker([50.869955, 20.6107172], {
      icon: this.mapService.L.icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'leaflet/marker-icon.png',
        shadowUrl: 'leaflet/marker-shadow.png'
      })
    }).addTo(this.map);
    this.translate.get('SECTIONS.CONTACT.MAP_POPUP_HTML').subscribe((text: string) => {
      this.marker.bindPopup(text).openPopup();
    });
  }

  showPhoneNumber(): void {
    this.renderer.setStyle(this.buttonNumber.nativeElement, 'display', 'none');
    this.translate.get('SECTIONS.CONTACT.TELEPHONE_NUMBER').subscribe((text: string) => {
      this.number.nativeElement.innerText = text;
    });
  }

  showEmail(): void {
    this.renderer.setStyle(this.buttonEmail.nativeElement, 'display', 'none');
    this.translate.get('SECTIONS.CONTACT.EMAIL_ADDRESS').subscribe((text: string) => {
      this.email.nativeElement.innerText = text;
    });
  }
}
