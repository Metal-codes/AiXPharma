import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  static currentSection = 'ourProductSection';

  constructor() {
  }

  ngOnInit() {
  }

  onSectionChange(sectionId: string) {
    StartComponent.currentSection = sectionId;
  }
}
