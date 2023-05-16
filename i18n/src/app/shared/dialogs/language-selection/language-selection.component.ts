import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

/**
 * Component responsible for managing the language selection
 */
/* eslint-disable no-multi-spaces */
@Component({
  selector:    'fcb-language-selection',
  templateUrl: './language-selection.component.html',
  styleUrls:   ['./language-selection.component.scss']
})
export class LanguageSelectionComponent {
  public form: FormGroup;
  private currentLanguage;
  private readonly langKey: string = 'LANG';

  constructor(public dialogRef: MatDialogRef<LanguageSelectionComponent>) {
    this.currentLanguage = localStorage.getItem(this.langKey);
    this.form = new FormGroup({
      language: new FormControl(this.currentLanguage)
    });
  }
  
  public save(): void {
    alert('Redirect user to the app URL corresponding to the selected language');
  }
}
