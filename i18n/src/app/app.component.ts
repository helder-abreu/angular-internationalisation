import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public appTitle: string;

  constructor(private router: Router) {
    this.appTitle = $localize`Angular i18n EN`;
  }

  public ngOnInit(): void {
    this.router.navigate(['/home']);
  }
}
