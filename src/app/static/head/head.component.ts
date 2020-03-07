import {AfterViewInit, Component, HostListener, OnInit, Inject} from '@angular/core';
import {StartComponent} from '../../pages/start/start.component';
import * as $ from 'jquery';
import { WINDOW } from '@ng-toolkit/universal';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit, AfterViewInit {

  shrinked: boolean;

  constructor(@Inject(WINDOW) private window: Window, ) {
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
        $('#header').removeClass('shrink');
        $('.section-container').removeClass('shrink');
        this.shrinked = false;
      }
    } else if (event.target.defaultView.scrollY > 50) {
      if (!this.shrinked) {
        $('#header').addClass('shrink');
        $('.section-container').addClass('shrink');
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
    setInterval(() => {
      $('.header').addClass('ready');
    }, 1000);
  }
}
