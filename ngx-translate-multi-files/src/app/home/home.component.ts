import { Component, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { takeWhile } from 'rxjs';
import { LanguageService } from '../core/services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
  public lang: string = 'en-US';
  public today: Date = new Date();
  private isComponentAlive: boolean = true;

  constructor(private languageService: LanguageService,
              private translate: TranslateService) {
    this.languageService.currentLanguage
      .pipe(takeWhile(() => this.isComponentAlive))
      .subscribe((lang: string) => {
        this.lang = lang;
        this.translate.use(lang);
      });
  }

  public ngOnDestroy(): void {
    this.isComponentAlive = false;
  }
}
