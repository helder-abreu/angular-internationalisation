import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { LanguageService } from './core/services/language.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	/** The app title value */
	public appTitle: string = '';

	/** The component alive flag */
	private isComponentAlive: boolean = true;

	/**
	 * The class constructor
	 *
	 * @public
	 * @param languageService  The language service
	 * @param router           The Angular router service
	 */
	constructor(
		private languageService: LanguageService,
		private router: Router
	) {
		this.languageService
			.translate('app.title')
			.subscribe((translation: string) => {
				this.appTitle = translation;
			});
		this.languageService.currentLanguage
			.pipe(takeWhile(() => this.isComponentAlive))
			.subscribe((language: string) => {
				this.languageService.setActiveLanguage(language);
			});
	}

	/**
	 * The Angular lifecycle hook that is triggered after the component is initialized
	 */
	public ngOnInit(): void {
		this.router.navigate(['/home']);
	}
}
