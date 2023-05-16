import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material.module';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

export function HttpLoaderFactory(httpBackend: HttpBackend) {
  return new MultiTranslateHttpLoader(httpBackend, [
    { prefix: './assets/i18n/', suffix: '.json' }
  ]);
}

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpBackend],
      }
    }),
    MaterialModule
  ]
})
export class HomeModule { }
