import { Component, OnInit } from '@angular/core';
import { EarthquakesService } from '../services//earthquakes/earthquakes.service'
import { MapService } from '../services/map/map.service'


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(
    private earthquakeService: EarthquakesService,
    private map: MapService
  ){}
  
  ngOnInit() {
    this.getEarthquakes();
  }
  
  getEarthquakes(){
    this.earthquakeService.getEarthquakes().subscribe(
      data => {
        
        this.map.buildMap(data)
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
