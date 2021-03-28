import { Component, OnInit } from '@angular/core';
import { EarthquakesService } from '../services/earthquakes/earthquakes.service'
import { MapService } from '../services/map/map.service'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit  {  

  constructor(
    private earthquakeService: EarthquakesService,
    private map: MapService
  ){}
  
  ngOnInit() {
    this.getEarthquakes('all_week');
  }

  getRange($event) {
    this.getEarthquakes($event);
  }
  
  getEarthquakes(range){
    this.earthquakeService.getEarthquakes(range).subscribe(
      data => {
        
        this.map.buildMap(data)
        this.sortData(data)
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

  sortData(data){

    const places = []
    let date

    // Splitting the strings to return an object only with the locations after a comma.
    data.features.slice().map((feature,b) =>{
      date = new Date(feature.properties.time);
      places.push(feature.properties.place.toLowerCase().split(', ')[1] + "-" + date.getDate())
    })

    // console.log(places)

    const occurrencesObj = Object.values(places.reduce((obj, place) => {
      if (obj[place] === undefined)
        obj[place] = { name: place.split('-')[0], series:  { name: place.split('-')[1], value: 1 } };
      else
        obj[place].series.value++;
      return obj;
    }, {}));

    // console.log(occurrencesObj)

    // // Sorting the object desc
    const orderedObj = this.sortDesc(occurrencesObj)
    // console.log(orderedObj)

    var seen = {};
    data = orderedObj.filter(function(entry) {
      var previous;

      // Have we seen this label before?
      if (seen.hasOwnProperty(entry.name)) {
          // Yes, grab it and add this series to it
          previous = seen[entry.name];
          previous.series.push(entry.series);

          // Don't keep this entry, we've merged it into the previous one
          return false;
      }

      // entry.series probably isn't an array; make it one for consistency
      if (!Array.isArray(entry.series)) {
          entry.series = [entry.series];
      }

      // Remember that we've seen it
      seen[entry.name] = entry;

      // Keep this one, we'll merge any others that match into it
      return true;
    });

    // console.log(data)

    const final = this.sortDesc2(data)
    console.log(final)

  }

  sortDesc(array){
    return array.slice().sort((a, b) => b.series.value - a.series.value)
    // return array;
  }

  sortDesc2(array){
    return array.slice().sort((a,b) => this.sum(b.series) - this.sum(a.series));
  }

  sum(obj) {
    var sum = 0;
    for( var el in obj ) {
      // console.log(obj[el].value)
      if( obj.hasOwnProperty(el) ) {
        sum += parseFloat(obj[el].value);
      }
    }
    return sum;
  }

  // ca = 705
  // alas = 367
  // hawaii = 154
  // oklahoma = 148
  // nevada = 107
  // montana = 66
  // utah = 45

}