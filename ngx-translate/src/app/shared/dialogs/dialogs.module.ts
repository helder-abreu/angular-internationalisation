import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { MaterialModule } from '../../material.module';
import { LanguageSelectionComponent } from './language-selection/language-selection.component';

export function HttpLoaderFactory(httpBackend: HttpBackend) {
  return new MultiTranslateHttpLoader(httpBackend, [
    { prefix: './assets/i18n/', suffix: '.json' }
  ]);
}

@NgModule({
  declarations: [
    LanguageSelectionComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpBackend],
      }
    })
  ],
  exports: [
    CommonModule,
    TranslateModule
  ]
})
export class DialogsModule { }
