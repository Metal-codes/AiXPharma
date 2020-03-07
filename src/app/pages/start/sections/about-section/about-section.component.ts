import {Component, HostListener, OnInit, Inject} from '@angular/core';
import * as $ from 'jquery';
import { WINDOW } from '@ng-toolkit/universal';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent implements OnInit {

  played: boolean;

  constructor(@Inject(WINDOW) private window: Window, ) {
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
      if ($('.block-about').is(':visible') ||
        ($('.block-about').offset().top - 500) <= event.target.defaultView.scrollY) {
        if ($('#videoBlockAbout').get(0).paused) {
          $('#videoBlockAbout').trigger('play');
        }

      }
    }
  }
}
