import { Component } from '@angular/core';

import {
  Health,
  HealthDataType,
  HealthQueryOptions,
  HealthData
} from '@ionic-native/health/ngx';

@Component({
  selector: 'import-issue-ws-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'import-test-app';

  constructor(private _health: Health) {

  }
}
