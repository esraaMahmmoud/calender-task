import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'calender-task';
  constructor(
    public translate: TranslateService

  ){}
  ngOnInit(): void {
    this.translate.use('en-US');
  }
}
