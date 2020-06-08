import { Component } from '@angular/core';
import { delay } from 'rxjs/operators';

import { LoaderService } from './services/loader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public isCollapsed = false;
  public loading: boolean = false;

  constructor(public loaderService: LoaderService) {
    this.loaderService.isLoading
      .pipe(delay(0))
      .subscribe(value => this.loading = value);
  }
}
