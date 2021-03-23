import { Component } from '@angular/core';
import { EarthquakesService } from './services/earthquakes.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'earthquake-data-map';

  constructor(public earthquakeService: EarthquakesService){
    this.getEarthquakes();
  }

  getEarthquakes(){
    this.earthquakeService.getEarthquakes().subscribe(
      data => {
        
        console.log(data);

      }, 
      
      error => {   
        // console.log(error)
      },
      
      () => {
        // do something when operation successfully complete
      });
    //Consuming service  
  }

}
