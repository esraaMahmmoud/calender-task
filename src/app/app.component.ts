import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    public translate: TranslateService,
    @Inject(DOCUMENT) private document: Document,
  ){}

  ngOnInit(): void {
    this.translate.use('en-US');
    this.translate.onLangChange.subscribe(
      change => {
        this.document.querySelector('body').setAttribute('dir', change.lang == 'ar-EG' ? 'rtl' : 'ltr');
      }
    )
  }
}
