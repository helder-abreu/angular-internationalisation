import { Component } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { DialogService } from '../core/services/dialog.service';
import { LanguageSelectionComponent } from '../shared/dialogs/language-selection/language-selection.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  constructor(private dialog: DialogService) {}

  public openLanguageDialog(): void {
    const config: MatDialogConfig = {
      width:      '500px',
      height:     '250px',
      disableClose: true
    };

    this.dialog.showDialog(LanguageSelectionComponent, config);
  }
}
