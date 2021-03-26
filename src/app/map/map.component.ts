import { Component, OnInit } from '@angular/core';
import { EarthquakesService } from '../services//earthquakes/earthquakes.service'
import { MapService } from '../services/map/map.service'


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  range = 'All Weekly Earthquakes'

  constructor(
    private earthquakeService: EarthquakesService,
    private map: MapService
  ){}
  
  ngOnInit() {
    this.getEarthquakes('all_week');
  }

  selectLabel(range){
    switch (range) {
      case '1.0_hour':
        this.range = 'Hourly Earthquakes Mag > 1.0';
        break;
      case '2.5_hour':
        this.range = 'Hourly Earthquakes Mag > 2.5';
        break;
      case '4.5_hour':
        this.range = 'Hourly Earthquakes Mag > 4.5';
        break;
      case 'all_hour':
        this.range = 'All Hourly Earthquakes';
        break;
      case '1.0_day':
        this.range = 'Daily Earthquakes Mag > 1.0';
        break;
      case '2.5_day':
        this.range = 'Daily Earthquakes Mag > 2.5';
        break;
      case '4.5_day':
        this.range = 'Daily Earthquakes Mag > 4.5';
        break;
      case 'all_day':
        this.range = 'All Daily Earthquakes';
        break;
      case '1.0_week':
        this.range = 'Weekly Earthquakes Mag > 1.0';
        break;
      case '2.5_week':
        this.range = 'Weekly Earthquakes Mag > 2.5';
        break;
      case '4.5_week':
        this.range = 'Weekly Earthquakes Mag > 4.5';
        break;
      case 'all_week':
        this.range = 'All Weekly Earthquakes';
        break;
      case '1.0_month':
        this.range = 'Monthly Earthquakes Mag > 1.0';
        break;
      case '2.5_month':
        this.range = 'Monthly Earthquakes Mag > 2.5';
        break;
      case '4.5_month':
        this.range = 'Monthly Earthquakes Mag > 4.5';
        break;
      case 'all_month':
        this.range = 'All Monthly Earthquakes';
        break;      
      default:
        break;
    }
  }

  changeData(range){
    this.selectLabel(range);
    this.getEarthquakes(range);
  }
  
  getEarthquakes(range){
    this.earthquakeService.getEarthquakes(range).subscribe(
      data => {
        
        this.map.buildMap(data)
        // console.log(data);

      }, 
      
      error => {   
        console.log(error)
      },
      
      () => {
        // do something when operation successfully complete
      });
    //Consuming service  
  }

  openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

}