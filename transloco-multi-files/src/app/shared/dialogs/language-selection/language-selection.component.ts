import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { takeWhile } from 'rxjs';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';
import { LanguageService } from '../../../core/services/language.service';
import { MaterialModule } from '../../../material.module';

/**
 * Component responsible for managing the language selection
 */
/* eslint-disable no-multi-spaces */
@Component({
	selector: 'fcb-language-selection',
	templateUrl: './language-selection.component.html',
	styleUrls: ['./language-selection.component.scss'],
	standalone: true,
	imports: [ReactiveFormsModule, MaterialModule, TranslocoModule],
	providers: [{ provide: TRANSLOCO_SCOPE, useValue: { scope: 'dialogs/language-selection', alias: 'language' }}]
})
export class LanguageSelectionComponent implements OnInit, OnDestroy {
	public form: FormGroup;
	private currentLanguage: string;
	private isComponentAlive: boolean = true;

	constructor(public dialogRef: MatDialogRef<LanguageSelectionComponent>, private languageService: LanguageService) {
		this.currentLanguage = this.languageService.getActiveLanguage();
		this.form = new FormGroup({
			language: new FormControl(this.currentLanguage),
		});
		this.languageService.currentLanguage
			.pipe(takeWhile(() => this.isComponentAlive))
			.subscribe((lang: string) => {
				this.languageService.setActiveLanguage(lang);
			});
	}

	public ngOnInit(): void {
		this.form.get('language')?.valueChanges
			.pipe(takeWhile(() => this.isComponentAlive))
			.subscribe((value) => {
				this.languageService.currentLanguage.next(value);
			});
	}

	public ngOnDestroy(): void {
		this.isComponentAlive = false;
	}

	public cancel(): void {
		this.languageService.currentLanguage.next(this.currentLanguage);
		this.dialogRef.close();
	}
}
