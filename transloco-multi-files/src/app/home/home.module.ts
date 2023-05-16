import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material.module';

@NgModule({
	declarations: [HomeComponent],
	providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'home' }],
	imports: [CommonModule, HomeRoutingModule, MaterialModule, TranslocoModule],
})
export class HomeModule {}
