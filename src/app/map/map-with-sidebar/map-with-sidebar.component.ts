import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'MapWithSidebar',
    template: `
              <div class="my-container">
  
              <div id="mySidebar" class="sidebar">
                  <a href="javascript:void(0)" class="closebtn" (click)="closeNav()">×</a>
                  
                  <div class="heading">
                      <h1>Earthquakes</h1>
                  </div>
  
                  <div id="listings" class="listings"></div>
              </div>
  
              <div id="main">
                  <button class="openbtn" (click)="openNav()">☰</button>  
                  <div id="map" class="map"></div>
              </div>
            </div>  
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class MapWithSidebar {

    openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
      
    closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    }

  }