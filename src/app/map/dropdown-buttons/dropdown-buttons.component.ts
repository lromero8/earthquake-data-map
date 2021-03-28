import { ChangeDetectionStrategy, Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'DropdownButtons',
    styleUrls: ['./dropdown-buttons.component.css'],
    template: `
    <div class="d-flex justify-content-center mt-5">
        <div class="row">
            <div class="col">


                <div class="btn-group my-group">
                    <div class="btn-group" ngbDropdown role="group" container="body" aria-label="Button group with nested dropdown">
                        <button class="btn btn-outline-primary btn-sm" ngbDropdownToggle>Hourly</button>
                        <div class="dropdown-menu" ngbDropdownMenu>
                            <button class="dropdown-item-hourly" ngbDropdownItem (click)="changeData('all_hour')">All Earthquakes</button>
                            <button class="dropdown-item-hourly" ngbDropdownItem (click)="changeData('1.0_hour')">Magnitud 1.0+</button>
                            <button class="dropdown-item-hourly" ngbDropdownItem (click)="changeData('2.5_hour')">Magnitud 2.5+</button>
                            <button class="dropdown-item-hourly" ngbDropdownItem (click)="changeData('4.5_hour')">Magnitud 4.5+</button>
                        </div>
                    </div>
                    <div class="btn-group" ngbDropdown role="group" container="body" aria-label="Button group with nested dropdown">
                        <button class="btn btn-outline-success btn-sm" ngbDropdownToggle>Daily</button>
                        <div class="dropdown-menu" ngbDropdownMenu>
                            <button class="dropdown-item-daily" ngbDropdownItem (click)="changeData('all_day')">All Earthquakes</button>
                            <button class="dropdown-item-daily" ngbDropdownItem (click)="changeData('1.0_day')">Magnitud 1.0+</button>
                            <button class="dropdown-item-daily" ngbDropdownItem (click)="changeData('2.5_day')">Magnitud 2.5+</button>
                            <button class="dropdown-item-daily" ngbDropdownItem (click)="changeData('4.5_day')">Magnitud 4.5+</button>
                        </div>
                    </div>
                    <div class="btn-group" ngbDropdown role="group" container="body" aria-label="Button group with nested dropdown">
                        <button class="btn btn-outline-warning btn-sm" ngbDropdownToggle>Weekly</button>
                        <div class="dropdown-menu" ngbDropdownMenu>
                            <button class="dropdown-item-weekly" ngbDropdownItem (click)="changeData('all_week')">All Earthquakes</button>
                            <button class="dropdown-item-weekly" ngbDropdownItem (click)="changeData('1.0_week')">Magnitud 1.0+</button>
                            <button class="dropdown-item-weekly" ngbDropdownItem (click)="changeData('2.5_week')">Magnitud 2.5+</button>
                            <button class="dropdown-item-weekly" ngbDropdownItem (click)="changeData('4.5_week')">Magnitud 4.5+</button>
                        </div>
                    </div>
                    <div class="btn-group" ngbDropdown role="group" container="body" aria-label="Button group with nested dropdown">
                        <button class="btn btn-outline-danger btn-sm" ngbDropdownToggle>Monthly</button>
                        <div class="dropdown-menu" ngbDropdownMenu>
                            <button class="dropdown-item-monthly" ngbDropdownItem (click)="changeData('all_month')">All Earthquakes</button>
                            <button class="dropdown-item-monthly" ngbDropdownItem (click)="changeData('1.0_month')">Magnitud 1.0+</button>
                            <button class="dropdown-item-monthly" ngbDropdownItem (click)="changeData('2.5_month')">Magnitud 2.5+</button>
                            <button class="dropdown-item-monthly" ngbDropdownItem (click)="changeData('4.5_month')">Magnitud 4.5+</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="d-flex justify-content-center mt-5">
        <div class="row">
            <div class="col">
                <span>{{range}}</span>
            </div>
        </div>
    </div>


    <div class="d-flex justify-content-center mt-4">
      <div class="row">
          <div class="col">
            <h3 style='color: white'><span style='color: transparent; text-shadow: 0 0 0 #FCCA2B'>⭕️</span> Magnitud <= 2.0</h3>
            <h3 style='color: white'><span style='color: transparent; text-shadow: 0 0 0 #FF711F'>⭕️</span> Magnitud > 2.0 & < 4.0</h3>
            <h3 style='color: white'><span style='color: transparent; text-shadow: 0 0 0 #C81E11'>⭕️</span> Magnitud >= 4.0</h3>
          </div>
      </div>
    </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class DropdownButtons {
    @Output() callParent = new EventEmitter();

    range = 'All Weekly Earthquakes';


    changeData(range){
        this.selectLabel(range);
        this.callParent.emit(range);
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

  }