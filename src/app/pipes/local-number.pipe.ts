import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'localNumber',
  pure: false
})
export class LocalNumberPipe implements PipeTransform {
  constructor(
    private translate: TranslateService
  ){}

  transform(number: number): string {
    return new Intl.NumberFormat(this.translate.currentLang).format(number).replace(/,|٬/g, '');
  }

}
