import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Service responsible for managing the current application language
 */
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public currentLanguage: BehaviorSubject<string> = new BehaviorSubject<string>('en');
  private readonly langKey: string = 'LANG';

  constructor() {
    const savedLanguage = localStorage.getItem(this.langKey);
    if (savedLanguage) {
      this.currentLanguage.next(savedLanguage);
    }
    this.currentLanguage
      .subscribe((newValue: string) => {
        if (newValue) {
          localStorage.setItem(this.langKey, newValue);
        }
      });
  }
}
