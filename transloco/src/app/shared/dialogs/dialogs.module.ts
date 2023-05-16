import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { MaterialModule } from '../../material.module';
import { LanguageSelectionComponent } from './language-selection/language-selection.component';

@NgModule({
  declarations: [
    LanguageSelectionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslocoModule,
    MaterialModule
  ]
})
export class DialogsModule { }
