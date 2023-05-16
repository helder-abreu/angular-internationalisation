import { Component, OnDestroy } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { takeWhile } from 'rxjs';
import { DialogService } from '../core/services/dialog.service';
import { LanguageService } from '../core/services/language.service';
import { LanguageSelectionComponent } from '../shared/dialogs/language-selection/language-selection.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnDestroy {
  private isComponentAlive: boolean = true;

  constructor(private dialog: DialogService,
              private languageService: LanguageService,
              private translate: TranslateService) {
    this.languageService.currentLanguage
      .pipe(takeWhile(() => this.isComponentAlive))
      .subscribe((lang: string) => {
        this.translate.use(lang);
      });
  }

  public ngOnDestroy(): void {
    this.isComponentAlive = false;
  }

  public openLanguageDialog(): void {
    const config: MatDialogConfig = {
      width:      '500px',
      height:     '250px',
      disableClose: true
    };

    this.dialog.showDialog(LanguageSelectionComponent, config);
  }
}
