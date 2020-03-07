import {Component, HostListener, OnInit, Inject, ViewChild, ElementRef, AfterViewInit, Renderer2} from '@angular/core';
@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})

export class AboutSectionComponent implements OnInit, AfterViewInit {

  @ViewChild('blockAbout', {static: false}) block: ElementRef;
  @ViewChild('videoBlock', {static: false}) videoBlock: ElementRef;
  played: boolean;

  constructor() {
  }

  ngOnInit() {
    this.played = false;
  }

  ngAfterViewInit(): void {
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
