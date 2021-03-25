import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';



@Injectable({
  providedIn: 'root'
})
export class MapService {
  map: mapboxgl.Map;
  // style = 'mapbox://styles/mapbox/light-v10';
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
      zoom: 1.5,
      center: [this.lng, this.lat]
    });

    // Search bar
    var geocoder = new MapboxGeocoder({ // Initialize the geocoder
      accessToken: mapboxgl.accessToken, // Set the access token
      placeholder: 'Search by country, state, city',
      // types: 'poi',
      // see https://docs.mapbox.com/api/search/#geocoding-response-object for information about the schema of each response feature
      render: function (item) {
          // extract the item's maki icon or use a default
          var maki = item.properties.maki || 'marker';
          return (
              "<div class='geocoder-dropdown-item'><img class='geocoder-dropdown-icon' src='https://unpkg.com/@mapbox/maki@6.1.0/icons/" +
              maki +
              "-15.svg'><span class='geocoder-dropdown-text'>" +
              item.text +
              '</span></div>'
          );
      },
      mapboxgl: mapboxgl, // Set the mapbox-gl instance
      marker: false, // Do not use the default marker style
    });

    // Add the geocoder to the map
    map.addControl(geocoder);
    // document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

    
    // Add geolocate control
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }));

    // Add map controls
    map.addControl(new mapboxgl.NavigationControl());


    // Add scale
    // var scale = new mapboxgl.ScaleControl({
    //   maxWidth: 80,
    //   unit: 'imperial'
    // });
    // map.addControl(scale);
       
    // scale.setUnit('metric');


    // Add markers
    /// Add data on map load
    map.on('load', (event) => {

      // buildLocationList(data);

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


      buildLocationList(data);

      /* This will let you use the .remove() function later on */
      // if (!('remove' in Element.prototype)) {
      //   Element.prototype.remove = function() {
      //     if (this.parentNode) {
      //       this.parentNode.removeChild(this);
      //     }
      //   };
      // }


      function buildLocationList(data) {
        data.features.forEach(function(store, i){
          /**
           * Create a shortcut for `store.properties`,
           * which will be used several times below.
           **/
          var prop = store.properties;
          // console.log(prop)
      
          /* Add a new listing section to the sidebar. */
          var listings = document.getElementById('listings');
          var listing = listings.appendChild(document.createElement('div'));
          /* Assign a unique `id` to the listing. */
          listing.id = "listing-" + data.features[i].properties.code;
          /* Assign the `item` class to each listing for styling. */
          listing.className = 'item';
      
          /* Add the link to the individual listing created above. */
          var link = listing.appendChild(document.createElement('a'));
          link.href = '#';
          link.className = 'title';
          link.id = "link-" + prop.code;
          link.innerHTML = prop.title;
      
          /* Add details to the individual listing. */
          var details = listing.appendChild(document.createElement('div'));
          details.innerHTML = prop.place;
          if (prop.tsunami) {
            details.innerHTML += ' · ' + prop.tsunami;
          }
          // if (prop.distance) {
          //   var roundedDistance = Math.round(prop.distance * 100) / 100;
          //   details.innerHTML +=
          //     '<p><strong>' + roundedDistance + ' miles away</strong></p>';
          // }

          link.addEventListener('click', function(e){
            for (var i = 0; i < data.features.length; i++) {
              if (this.id === "link-" + data.features[i].properties.code) {
                var clickedListing = data.features[i];
                // console.log(e)
                createPopUp(e, clickedListing);
                flyToStore(clickedListing);
              }
            }  
            var activeItem = document.getElementsByClassName('active');
            if (activeItem[0]) {
              activeItem[0].classList.remove('active');
            }
            // this.parentNode.classList.add('active');
          });


        });
      }



      // When a click event occurs on a feature in the places layer, open a popup at the
      // location of the feature, with description HTML from its properties.
      map.on('click', 'usgs', function (e) {
        // console.log(coordinates)

        createPopUp(e, e.features[0])
        flyToStore(e.features[0])

        });

        function flyToStore(currentFeature) {
          // console.log(currentFeature)
          map.flyTo({
            center: currentFeature.geometry.coordinates,
            zoom: 7
          });
        }

        function createPopUp(e, currentFeature) {
          var popUps = document.getElementsByClassName('mapboxgl-popup');
          /** Check if there is already a popup on the map and if so, remove it */
          if (popUps[0]) popUps[0].remove();

          // console.log(currentFeature)
          var coordinates = currentFeature.geometry.coordinates.slice();
          let dateObject = new Date(currentFeature.properties.time) // passing epoch timestamp
          var description = 
            '<b>• Location: </b>' + currentFeature.properties.place + '<br>' +
            '<b>• Magnitud: </b>' + currentFeature.properties.mag + '<br>' +
            '<b>• Time: </b>' + dateObject;
  
          // Ensure that if the map is zoomed out such that multiple
          // copies of the feature are visible, the popup appears
          // over the copy being pointed to.
          // while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          //   coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          // }
  
          let mag = currentFeature.properties.mag;
          let colorIntensity
  
          if (mag <= 2) {
            colorIntensity = '#FCCA2B'
          } else if (mag > 2 && mag < 4){
            colorIntensity = '#FF711F'
          } else {
            colorIntensity = '#C81E11'
          }
        
          var popup = new mapboxgl.Popup({ closeOnClick: false })
            .setLngLat(coordinates)
            .setHTML(
              "<h3><span style='color: transparent; text-shadow: 0 0 0 " + colorIntensity +"'>⭕️</span> Details</h3>" +
              '<h4>' + description + '</h4>'
            )
            .addTo(map);   


        }
        
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
