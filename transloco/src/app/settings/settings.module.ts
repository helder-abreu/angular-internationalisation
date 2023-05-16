import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { MaterialModule } from '../material.module';
import { DialogsModule } from '../shared/dialogs/dialogs.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MaterialModule,
    TranslocoModule,
    DialogsModule
  ]
})
export class SettingsModule { }
