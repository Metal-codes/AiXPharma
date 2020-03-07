import {Component, HostListener, OnInit, Inject, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-service-section',
  templateUrl: './service-section.component.html',
  styleUrls: ['./service-section.component.css']
})
export class ServiceSectionComponent implements OnInit {

  @ViewChild('blockAbout', {static: false}) block: ElementRef;
  @ViewChild('videoBlock', {static: false}) videoBlock: ElementRef;
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
        (this.block.nativeElement.getBoundingClientRect().top - 500) <= event.target.defaultView.scrollY) {
        if (this.videoBlock.nativeElement.paused) {
          this.videoBlock.nativeElement.play();
        }

      }
    }
  }
}
