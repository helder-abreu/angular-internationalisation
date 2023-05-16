import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Service responsible for managing the dialogs across the application.
 */
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  /**
   * Class constructor.
   *
   * @public
   * @param dialog  Injection of the MatDialog service
   */
  constructor(public dialog: MatDialog) { }

  /**
   * Generic Dialog.
   *
   * @public
   * @param template  The dialog template / component reference
   * @param config    The dialog config
   * @returns         {Observable<any>}
   */
  public showDialog<T>(template: ComponentType<T>, config: MatDialogConfig): Observable<any> {
    const dialogRef = this.dialog.open(template, config);
    return dialogRef.afterClosed()
      .pipe(
        map((result: T) => {
          return result;
        })
      );
  }
}
