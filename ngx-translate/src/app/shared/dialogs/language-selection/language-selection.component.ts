import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { takeWhile } from 'rxjs';
import { LanguageService } from '../../../core/services/language.service';

/**
 * Component responsible for managing the language selection
 */
/* eslint-disable no-multi-spaces */
@Component({
  selector:    'fcb-language-selection',
  templateUrl: './language-selection.component.html',
  styleUrls:   ['./language-selection.component.scss']
})
export class LanguageSelectionComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  private currentLanguage: string;
  private isComponentAlive: boolean = true;

  constructor(public dialogRef: MatDialogRef<LanguageSelectionComponent>,
              private languageService: LanguageService,
              private translate: TranslateService) {
    this.currentLanguage = this.translate.currentLang;
    this.form = new FormGroup({
      language: new FormControl(this.translate.currentLang)
    });
  }

  public ngOnInit(): void {
    this.form.get('language')?.valueChanges
      .pipe(takeWhile(() => this.isComponentAlive))
      .subscribe((value) => {
        this.languageService.currentLanguage.next(value);
      })
  }

  public ngOnDestroy(): void {
    this.isComponentAlive = false;
  }
  
  public cancel(): void {
    this.languageService.currentLanguage.next(this.currentLanguage);
    this.dialogRef.close();
  }
}
