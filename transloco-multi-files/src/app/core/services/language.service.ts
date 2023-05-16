import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BehaviorSubject, Observable, filter } from 'rxjs';

/**
 * Service responsible for managing the current application language
 */
@Injectable({
	providedIn: 'root',
})
export class LanguageService {
	/** The current language */
	public currentLanguage: BehaviorSubject<string> = new BehaviorSubject<string>('en');

	/** The localStorage lang key */
	private readonly langKey: string = 'LANG';

	/**
	 * The service constructor
	 *
	 * @public
	 * @param transloco The transloco service
	 */
	constructor(private transloco: TranslocoService) {
		const savedLanguage = localStorage.getItem(this.langKey);
		if (savedLanguage) {
			this.currentLanguage.next(savedLanguage);
		}
		this.currentLanguage.pipe(filter((newValue) => newValue != null && newValue.trim().length > 0)).subscribe((newValue: string) => {
			localStorage.setItem(this.langKey, newValue);
		});
	}

	/**
	 * Returns the active language
	 *
	 * @public
	 * @returns {string}
	 */
	public getActiveLanguage(): string {
		return this.transloco.getActiveLang();
	}

	/**
	 * Sets the active language
	 *
	 * @public
	 * @param languageKey  The language key to be used to set the active language
	 * @returns            {void}
	 */
	public setActiveLanguage(languageKey: string): void {
		this.transloco.setActiveLang(languageKey);
	}

	/**
	 * Gets the translated value of a key as observable
	 *
	 * @public
	 * @param key The translation key
	 * @returns   {Observable<string>}
	 */
	public translate(key: string): Observable<string> {
		return this.transloco.selectTranslate(key);
	}
}
