import { HttpClient, HttpParams } from '@angular/common/http';

import {
  Health,
  HealthDataType,
  HealthQueryOptions,
  HealthData
} from '@ionic-native/health';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IonicHelathApiService {
  //constructor( private _health: Health ) { }

  isAvailable(): Promise<boolean> {
    return Health.isAvailable();
    //return this._health.isAvailable();
  }

  requestAuthorization(datatypes: (string | HealthDataType)[]): Promise<any> {
    return Health.requestAuthorization(datatypes);
    //return this._health.requestAuthorization( datatypes );
  }

  query(queryOptions: HealthQueryOptions): Promise<HealthData[]> {
    return Health.query(queryOptions);
    //return this._health.query( queryOptions );
  }
}
