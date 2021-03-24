import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';


@Injectable({
  providedIn: 'root'
})
export class MapService {
  map: mapboxgl.Map;
  // style = 'mapbox://styles/mapbox/streets-v11';
  style = 'mapbox://styles/lromero8/ckmlgs6l407ay18ntxg06n5k6';
  lat = 0;
  lng = 0;

  // data
  source: any;
  markers: any;

  geojson = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-77.032, 38.913]
      },
      properties: {
        title: 'Mapbox',
        description: 'Washington, D.C.'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.414, 37.776]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }]
  };

  constructor() { }

  buildMap(data){
    mapboxgl.accessToken = 'pk.eyJ1IjoibHJvbWVybzgiLCJhIjoiY2ttbGZpMDRlMDU0YzJ2bnhhMGV3MXk4dCJ9.erq_VeKqSSG1ifnvZjwP7Q';
    var map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 2,
      center: [this.lng, this.lat]
    });
    // Add map controls
    map.addControl(new mapboxgl.NavigationControl());

    // Add markers
    /// Add realtime firebase data on map load
    map.on('load', (event) => {

      /// register source
      map.addSource('usgs', {
         type: 'geojson',
         data: data
      });

      /// get source
      this.source = map.getSource('usgs')

      /// subscribe to realtime database and set data source
      // this.markers.subscribe(markers => {
      //     let data = new FeatureCollection(markers)
      //     this.source.setData(data)
      // })

      /// create map layers with realtime data
      map.addLayer({
        id: 'usgs',
        source: 'usgs',
        type: 'circle',
        // layout: {
        //   'text-field': '.',
        //   'text-size': 24,
        //   'text-transform': 'uppercase',
        //   // 'icon-image': 'marker-15',
        //   // 'icon-size': 5,
        //   'text-offset': [0, 1.5]
        // },
        paint: {
          //   * Blue, 20px circles when magnitud is less than 2
          //   * Yellow, 30px circles when magnitud is between 2 and 4
          //   * Red, 40px circles when magnitud is greater than or equal to 4
          // 'circle-color': '#E710E4',
          'circle-color': [
            'step',
            ['get', 'mag'],
            '#FCCA2B',
            2,
            '#FF711F',
            4,
            '#C81E11'
          ],
          'circle-radius': 5,
          'circle-stroke-color': 'black',
          'circle-stroke-width': 1,
          'circle-opacity': 0.5
          // 'icon-color': 'red',
          // 'text-color': 'red',
          // 'text-halo-color': '#fff',
          // 'text-halo-width': 2
        }
      })


      // When a click event occurs on a feature in the places layer, open a popup at the
      // location of the feature, with description HTML from its properties.
      map.on('click', 'usgs', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        // console.log(coordinates)
        let dateObject = new Date(e.features[0].properties.time) // passing epoch timestamp
        var description = 
          '<b>• Location: </b>' + e.features[0].properties.place + '<br>' +
          '<b>• Magnitud: </b>' + e.features[0].properties.mag + '<br>' +
          '<b>• Time: </b>' + dateObject;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        let mag = e.features[0].properties.mag;
        let colorIntensity

        if (mag <= 2) {
          colorIntensity = '#FCCA2B'
        } else if (mag > 2 && mag < 4){
          colorIntensity = '#FF711F'
        } else {
          colorIntensity = '#C81E11'
        }
        
        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(
            "<h3><span style='color: transparent; text-shadow: 0 0 0 " + colorIntensity +"'>⭕️</span> Properties</h3>" +
            '<h4>' + description + '</h4>'
          )
          .addTo(map);
        });
        
        // Change the cursor to a pointer when the mouse is over the places layer.
        map.on('mouseenter', 'usgs', function () {
          map.getCanvas().style.cursor = 'pointer';
        });
        
        // Change it back to a pointer when it leaves.
        map.on('mouseleave', 'usgs', function () {
          map.getCanvas().style.cursor = '';
        });


    })

  }

}
