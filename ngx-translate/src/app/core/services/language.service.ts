import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Service responsible for managing the current application language
 */
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public currentLanguage: BehaviorSubject<string> = new BehaviorSubject<string>('en');
  private readonly langKey: string = 'LANG';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'pt']);
    const savedLanguage = localStorage.getItem(this.langKey);
    if (savedLanguage) {
      this.currentLanguage.next(savedLanguage);
    }
    this.currentLanguage
      .subscribe((newValue: string) => {
        if (newValue) {
          this.translate.use(newValue);
          localStorage.setItem(this.langKey, newValue);
        }
      });
  }

  public getTranslation(key: string): Observable<string> {
    return this.translate.get(key);
  }
}
