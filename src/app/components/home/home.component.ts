import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  plans: { planName: string, isDone: boolean }[]

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.plans = [
      { planName: "Buy new sweatshirt", isDone: true },
      { planName: "Begin promotional phase", isDone: true },
      { planName: "Read an article", isDone: false },
      { planName: "Try not to fall asleap", isDone: false },
      { planName: "Watch 'sherlock'", isDone: false },
      { planName: "Begin QA for the product", isDone: false },
      { planName: "Go for a walk", isDone: false },

    ]

  }


}