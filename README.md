# EarthquakeDataMap

This application shows the latest earthquakes happening in the world. It was built on Angular 11. 

The data is taken from USGS and it's been rendered on top of Mapbox.

## Use Cases:
    
    1. User can see data on map.
    2. User can see data classified by magnitud.
    3. User can select what kind of data she/he wants so see on the map.
        3.1 Hourly
            3.1.1 All Hourly
            3.1.2 Hourly with magnitud 1.0+
            3.1.3 Hourly with magnitud 2.5+
            3.1.4 Hourly with magnitud 4.5+
        3.2 Daily
            3.2.1 All Daily
            3.2.2 Daily with magnitud 1.0+
            3.2.3 Daily with magnitud 2.5+
            3.2.4 Daily with magnitud 4.5+
        3.3 Weekly
            3.3.1 All Weekly
            3.3.2 Weekly with magnitud 1.0+
            3.3.3 Weekly with magnitud 2.5+
            3.3.4 Weekly with magnitud 4.5+
        3.4 Monthly
            3.4.1 All Monthly
            3.4.2 Monthly with magnitud 1.0+
            3.4.3 Monthly with magnitud 2.5+
            3.4.4 Monthly with magnitud 4.5+     
    4. User can search by country, state, or city.
    5. User can select a dot on the map. User will fly to location and a popup message with its details will appear.
    6. User can navigate on the map.
        6.1 User can zoom in and out on the map.
        6.2 User can fly to current location.
    7. User can open/close a sidebar to see all earthquakes ordered desc by magnitud.
        7.1. User can click on each earthquake to fly to its location on the map. A popup message with its details will appear.


## Libraries Used

    - Mabbox-gl@2.1: Renders data on a map.
    - Mapbox-gl-geocoder@4.7: Shows a search bar on the map.
    - Bootstrap@9.1: Shows dropdowns to select the type of data.
    - ExpressJS@4.17: Used to create a deployment server for Heroku.


## Deployment Process

1. The first step was to create new app on Heroku.
2. Give the app a name.
3. Select GitHub repo that's going to be deployed.
4. Select repo's branch.
5. Activate automatic deploys.
6. Install express.js
7. Create a server.js file on the root directory.
8. Serve the static files from dist folder.
9. Wait for a request to any path and redirect all of the requests to index.html.
10. Listen to requests at the specified port.
11. Change the start script to node server.js.
12. Change the build script to ng build --prod.
13. Push to main.



## EarthquakeDataMap

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# earthquake-data-map
