import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material.module';
import { DialogsModule } from '../shared/dialogs/dialogs.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

export function HttpLoaderFactory(httpBackend: HttpBackend) {
  return new MultiTranslateHttpLoader(httpBackend, [
    { prefix: './assets/i18n/', suffix: '.json' }
  ]);
}

@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpBackend],
      }
    }),
    MaterialModule,
    DialogsModule
  ]
})
export class SettingsModule { }
