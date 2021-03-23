import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EarthquakesService {
  endpoint: string = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';

  constructor(private http: HttpClient) { }

  // Get Earthquakes
  getEarthquakes() {
    return this.http.get<any>(`${this.endpoint}`)
      .pipe(map(data => {
        // console.log(data)
        return data;
      }));
  }

}
