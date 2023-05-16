import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take, takeWhile } from 'rxjs';
import { LanguageService } from './core/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public appTitle: string = '';
  private isComponentAlive: boolean = true;
  
  constructor(private router: Router,
              private languageService: LanguageService) {
    this.languageService.currentLanguage
      .pipe(takeWhile(() => this.isComponentAlive))
      .subscribe(() => {
        this.languageService.getTranslation('app.title')
          .pipe(take(1))
          .subscribe((translation: string) => this.appTitle = translation);
      });
  }

  public ngOnInit(): void {
    this.router.navigate(['/home']);
  }

  public ngOnDestroy(): void {
    this.isComponentAlive = false;
  }
}
