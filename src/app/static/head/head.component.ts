import {Component, OnInit} from '@angular/core';
import {StartComponent} from '../../pages/start/start.component';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  scrollTo(section): void {
    document.querySelector('#' + section)
      .scrollIntoView({behavior: 'smooth', block: 'end'});
  }

  private getCurrentSection(): string {
    return StartComponent.currentSection;
  }
}
