import {Component, OnInit} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title,
              private metaTagService: Meta, private translate: TranslateService) {
    this.translate.setDefaultLang('pl');
  }

  ngOnInit(): void {
    this.titleService.setTitle('AiXPharma :)')
    this.metaTagService.addTags([
      { name: 'keywords', content: '' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'AiXPharma' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2020-03-08', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
  }
}
