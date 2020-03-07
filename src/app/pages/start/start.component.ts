import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  static currentSection = 'ourProductSection';
  @ViewChild('sectionContainer', {static: true}) public sectionC: ElementRef;
  constructor() {
  }

  ngOnInit() {
  }

  onSectionChange(sectionId: string) {
    StartComponent.currentSection = sectionId;
  }
}
