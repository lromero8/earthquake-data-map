import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EarthquakesService {

  endpoint: string = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/';

  constructor(private http: HttpClient) { }

  // Get Earthquakes
  getEarthquakes(range) {
    return this.http.get<any>(`${this.endpoint + range}.geojson`)
      .pipe(map(data => {
        return data;
      }));
  }

}
