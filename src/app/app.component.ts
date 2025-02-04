import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en'); // Set default language
    this.translate.use('en'); // Use default language
  }
}
