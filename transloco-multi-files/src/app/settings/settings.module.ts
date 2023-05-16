import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';
import { MaterialModule } from '../material.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { LanguageSelectionComponent } from '../shared/dialogs/language-selection/language-selection.component';

@NgModule({
	declarations: [SettingsComponent],
	providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'settings' }],
	imports: [CommonModule, SettingsRoutingModule, MaterialModule, TranslocoModule, LanguageSelectionComponent],
})
export class SettingsModule {}
