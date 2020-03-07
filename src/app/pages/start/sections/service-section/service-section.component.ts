import {Component, HostListener, OnInit, Inject} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-service-section',
  templateUrl: './service-section.component.html',
  styleUrls: ['./service-section.component.css']
})
export class ServiceSectionComponent implements OnInit {

  played: boolean;

  constructor() {
  }

  ngOnInit() {
    this.played = false;
  }

  @HostListener('window: scroll', ['$event'])
  onScroll(event): void {
    this.playVideo(event);
  }

  private playVideo(event) {
    if (!this.played) {
      if (
        $('.block-service').is(':visible')
        ||
        ($('.block-service').offset().top - 500) <= event.target.defaultView.scrollY
      ) {
        if ($('#videoBlockService').get(0).paused) {
          $('#videoBlockService').trigger('play');
        }

      }
    }

  }
}
