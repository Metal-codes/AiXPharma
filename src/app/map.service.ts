import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable()
export class MapService {

  public L: any;

  // tslint:disable-next-line:ban-types
  constructor(@Inject(PLATFORM_ID) private  platformId: Object) {
    if (isPlatformBrowser(platformId)) {
      this.L = require('leaflet');
    }
  }
}
