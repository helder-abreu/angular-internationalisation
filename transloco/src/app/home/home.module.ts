import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material.module';

@NgModule({
	declarations: [HomeComponent],
	imports: [CommonModule, HomeRoutingModule, MaterialModule, TranslocoModule],
})
export class HomeModule {}
