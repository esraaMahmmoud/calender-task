import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public plans: { planName: string, isDone: boolean }[];
  private inputMsg: string;

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
    ];
    this.translate.onLangChange.pipe(
      switchMap(() => this.translate.get("inputMsg"))
    ).subscribe(
      inputMsg => {
        console.log("inputMsg", inputMsg)
        this.inputMsg = inputMsg;
      }
    )

  }
  addNew() {
    const plan = window.prompt(this.inputMsg);
    if (plan && plan.trim()) {
      this.plans.push({ planName: plan, isDone: false });
    }
  }
  togglePlan(item){
    item.isDone = !item.isDone
  }


}
