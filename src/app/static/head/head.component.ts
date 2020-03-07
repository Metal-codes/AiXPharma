import {AfterViewInit, Component, HostListener, OnInit, Inject, ViewChild, ElementRef, Renderer2, NgZone} from '@angular/core';
import {StartComponent} from '../../pages/start/start.component';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit, AfterViewInit {

  @ViewChild('header', {static: true}) header: ElementRef;

  shrinked: boolean;
  private interval: any;

  constructor(private renderer: Renderer2, private start: StartComponent, private zone: NgZone) {
  }

  private static getCurrentSection(): string {
    return StartComponent.currentSection;
  }

  ngOnInit(): void {
    this.shrinked = false;
  }

  ngAfterViewInit(): void {
    this.showTopBar();

  }

  @HostListener('window: scroll', ['$event'])
  onScroll(event): void {
    if (event.target.defaultView.scrollY < 50) {
      if (this.shrinked) {
        this.renderer.removeClass(this.header.nativeElement, 'shrink');
        this.renderer.removeClass(this.start.sectionC.nativeElement, 'shrink');
        this.shrinked = false;
      }
    } else if (event.target.defaultView.scrollY > 50) {
      if (!this.shrinked) {
        this.renderer.addClass(this.header.nativeElement, 'shrink');
        this.renderer.addClass(this.start.sectionC.nativeElement, 'shrink');
        this.shrinked = true;
      }
    }
  }

  scrollTo(section): void {
    document.querySelector('#' + section)
      .scrollIntoView({behavior: 'smooth', block: 'end'});
  }
  scrollTop(): void {
    document.querySelector('#header')
      .scrollIntoView({behavior: 'smooth', block: 'start'});
  }
  private showTopBar(): void {
    this.zone.runOutsideAngular(() => {
      this.interval = setInterval(() => {
        this.renderer.addClass(this.header.nativeElement, 'ready');
      }, 1000);
    });
  }
}
