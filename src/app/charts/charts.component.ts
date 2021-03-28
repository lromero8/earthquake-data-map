import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSelect($event){
    console.log($event)
  }


  multi: any[];

  title = 'Angular Charts';

  view: any[] = [700, 300];

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Census Date';
  showYAxisLabel = true;
  yAxisLabel = 'GDP Per Capita';
  timeline = true;

  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };

  schemeType = 'ordinal'

  // data goes here
public single = [
  {
      "name": "ca",
      "series": [
          {
              "name": "22",
              "value": 132
          },
          {
              "name": "24",
              "value": 106
          },
          {
              "name": "26",
              "value": 102
          },
          {
              "name": "25",
              "value": 89
          },
          {
              "name": "27",
              "value": 85
          },
          {
              "name": "23",
              "value": 79
          },
          {
              "name": "28",
              "value": 60
          },
          {
              "name": "21",
              "value": 47
          }
      ]
  },
  {
      "name": "alaska",
      "series": [
          {
              "name": "22",
              "value": 64
          },
          {
              "name": "25",
              "value": 63
          },
          {
              "name": "26",
              "value": 59
          },
          {
              "name": "24",
              "value": 50
          },
          {
              "name": "23",
              "value": 45
          },
          {
              "name": "27",
              "value": 34
          },
          {
              "name": "28",
              "value": 27
          },
          {
              "name": "21",
              "value": 24
          }
      ]
  },
  {
      "name": "hawaii",
      "series": [
          {
              "name": "26",
              "value": 27
          },
          {
              "name": "23",
              "value": 27
          },
          {
              "name": "22",
              "value": 25
          },
          {
              "name": "25",
              "value": 22
          },
          {
              "name": "24",
              "value": 20
          },
          {
              "name": "28",
              "value": 13
          },
          {
              "name": "27",
              "value": 12
          },
          {
              "name": "21",
              "value": 3
          }
      ]
  },
  {
      "name": "oklahoma",
      "series": [
          {
              "name": "23",
              "value": 40
          },
          {
              "name": "25",
              "value": 30
          },
          {
              "name": "22",
              "value": 26
          },
          {
              "name": "24",
              "value": 25
          },
          {
              "name": "27",
              "value": 10
          },
          {
              "name": "21",
              "value": 8
          },
          {
              "name": "26",
              "value": 7
          }
      ]
  },
  {
      "name": "nevada",
      "series": [
          {
              "name": "25",
              "value": 23
          },
          {
              "name": "24",
              "value": 19
          },
          {
              "name": "28",
              "value": 18
          },
          {
              "name": "22",
              "value": 12
          },
          {
              "name": "27",
              "value": 11
          },
          {
              "name": "26",
              "value": 10
          },
          {
              "name": "23",
              "value": 8
          },
          {
              "name": "21",
              "value": 7
          }
      ]
  },
  {
      "name": "montana",
      "series": [
          {
              "name": "26",
              "value": 14
          },
          {
              "name": "23",
              "value": 14
          },
          {
              "name": "22",
              "value": 14
          },
          {
              "name": "25",
              "value": 9
          },
          {
              "name": "24",
              "value": 7
          },
          {
              "name": "21",
              "value": 3
          },
          {
              "name": "28",
              "value": 2
          },
          {
              "name": "27",
              "value": 1
          }
      ]
  },
  {
      "name": "utah",
      "series": [
          {
              "name": "24",
              "value": 22
          },
          {
              "name": "23",
              "value": 9
          },
          {
              "name": "22",
              "value": 7
          },
          {
              "name": "25",
              "value": 4
          },
          {
              "name": "21",
              "value": 2
          },
          {
              "name": "26",
              "value": 1
          }
      ]
  },
  {
      "name": "new mexico",
      "series": [
          {
              "name": "23",
              "value": 12
          },
          {
              "name": "22",
              "value": 11
          },
          {
              "name": "24",
              "value": 9
          },
          {
              "name": "26",
              "value": 3
          },
          {
              "name": "21",
              "value": 3
          },
          {
              "name": "27",
              "value": 2
          },
          {
              "name": "25",
              "value": 1
          }
      ]
  },
  {
      "name": "undefined",
      "series": [
          {
              "name": "24",
              "value": 9
          },
          {
              "name": "26",
              "value": 8
          },
          {
              "name": "25",
              "value": 7
          },
          {
              "name": "22",
              "value": 6
          },
          {
              "name": "27",
              "value": 4
          },
          {
              "name": "21",
              "value": 3
          },
          {
              "name": "28",
              "value": 2
          },
          {
              "name": "23",
              "value": 2
          }
      ]
  },
  {
      "name": "puerto rico",
      "series": [
          {
              "name": "24",
              "value": 8
          },
          {
              "name": "25",
              "value": 7
          },
          {
              "name": "27",
              "value": 6
          },
          {
              "name": "28",
              "value": 4
          },
          {
              "name": "26",
              "value": 4
          },
          {
              "name": "23",
              "value": 3
          },
          {
              "name": "22",
              "value": 3
          }
      ]
  },
  {
      "name": "idaho",
      "series": [
          {
              "name": "25",
              "value": 7
          },
          {
              "name": "26",
              "value": 6
          },
          {
              "name": "28",
              "value": 5
          },
          {
              "name": "24",
              "value": 5
          },
          {
              "name": "27",
              "value": 4
          },
          {
              "name": "23",
              "value": 3
          },
          {
              "name": "21",
              "value": 3
          },
          {
              "name": "22",
              "value": 2
          }
      ]
  },
  {
      "name": "washington",
      "series": [
          {
              "name": "25",
              "value": 8
          },
          {
              "name": "22",
              "value": 5
          },
          {
              "name": "23",
              "value": 4
          },
          {
              "name": "28",
              "value": 3
          },
          {
              "name": "27",
              "value": 3
          },
          {
              "name": "26",
              "value": 3
          },
          {
              "name": "24",
              "value": 3
          }
      ]
  },
  {
      "name": "texas",
      "series": [
          {
              "name": "22",
              "value": 5
          },
          {
              "name": "26",
              "value": 4
          },
          {
              "name": "23",
              "value": 4
          },
          {
              "name": "25",
              "value": 3
          },
          {
              "name": "24",
              "value": 3
          },
          {
              "name": "21",
              "value": 1
          }
      ]
  },
  {
      "name": "indonesia",
      "series": [
          {
              "name": "27",
              "value": 3
          },
          {
              "name": "25",
              "value": 3
          },
          {
              "name": "24",
              "value": 3
          },
          {
              "name": "26",
              "value": 1
          },
          {
              "name": "23",
              "value": 1
          },
          {
              "name": "22",
              "value": 1
          },
          {
              "name": "21",
              "value": 1
          }
      ]
  },
  {
      "name": "canada",
      "series": [
          {
              "name": "26",
              "value": 4
          },
          {
              "name": "24",
              "value": 3
          },
          {
              "name": "25",
              "value": 2
          },
          {
              "name": "28",
              "value": 1
          },
          {
              "name": "21",
              "value": 1
          }
      ]
  },
  {
      "name": "new zealand",
      "series": [
          {
              "name": "27",
              "value": 2
          },
          {
              "name": "26",
              "value": 2
          },
          {
              "name": "25",
              "value": 2
          },
          {
              "name": "22",
              "value": 2
          },
          {
              "name": "24",
              "value": 1
          }
      ]
  },
  {
      "name": "chile",
      "series": [
          {
              "name": "24",
              "value": 2
          },
          {
              "name": "22",
              "value": 2
          },
          {
              "name": "28",
              "value": 1
          },
          {
              "name": "27",
              "value": 1
          },
          {
              "name": "26",
              "value": 1
          },
          {
              "name": "25",
              "value": 1
          },
          {
              "name": "23",
              "value": 1
          }
      ]
  },
  {
      "name": "oregon",
      "series": [
          {
              "name": "23",
              "value": 3
          },
          {
              "name": "28",
              "value": 2
          },
          {
              "name": "25",
              "value": 2
          },
          {
              "name": "24",
              "value": 1
          }
      ]
  },
  {
      "name": "russia",
      "series": [
          {
              "name": "26",
              "value": 2
          },
          {
              "name": "25",
              "value": 2
          },
          {
              "name": "24",
              "value": 1
          },
          {
              "name": "23",
              "value": 1
          },
          {
              "name": "22",
              "value": 1
          },
          {
              "name": "21",
              "value": 1
          }
      ]
  },
  {
      "name": "japan",
      "series": [
          {
              "name": "28",
              "value": 2
          },
          {
              "name": "27",
              "value": 1
          },
          {
              "name": "26",
              "value": 1
          },
          {
              "name": "25",
              "value": 1
          },
          {
              "name": "24",
              "value": 1
          }
      ]
  },
  {
      "name": "b.c.",
      "series": [
          {
              "name": "27",
              "value": 2
          },
          {
              "name": "26",
              "value": 1
          },
          {
              "name": "24",
              "value": 1
          },
          {
              "name": "23",
              "value": 1
          }
      ]
  },
  {
      "name": "tonga",
      "series": [
          {
              "name": "25",
              "value": 2
          },
          {
              "name": "22",
              "value": 2
          },
          {
              "name": "28",
              "value": 1
          }
      ]
  },
  {
      "name": "china",
      "series": [
          {
              "name": "22",
              "value": 2
          },
          {
              "name": "26",
              "value": 1
          },
          {
              "name": "25",
              "value": 1
          },
          {
              "name": "23",
              "value": 1
          }
      ]
  },
  {
      "name": "tennessee",
      "series": [
          {
              "name": "25",
              "value": 2
          },
          {
              "name": "23",
              "value": 1
          },
          {
              "name": "22",
              "value": 1
          }
      ]
  },
  {
      "name": "colombia",
      "series": [
          {
              "name": "22",
              "value": 2
          },
          {
              "name": "28",
              "value": 1
          },
          {
              "name": "24",
              "value": 1
          }
      ]
  },
  {
      "name": "argentina",
      "series": [
          {
              "name": "22",
              "value": 2
          },
          {
              "name": "25",
              "value": 1
          },
          {
              "name": "24",
              "value": 1
          }
      ]
  },
  {
      "name": "peru",
      "series": [
          {
              "name": "28",
              "value": 1
          },
          {
              "name": "26",
              "value": 1
          },
          {
              "name": "24",
              "value": 1
          },
          {
              "name": "23",
              "value": 1
          }
      ]
  },
  {
      "name": "california",
      "series": [
          {
              "name": "26",
              "value": 1
          },
          {
              "name": "24",
              "value": 1
          },
          {
              "name": "23",
              "value": 1
          },
          {
              "name": "22",
              "value": 1
          }
      ]
  },
  {
      "name": "fiji",
      "series": [
          {
              "name": "26",
              "value": 2
          },
          {
              "name": "22",
              "value": 1
          }
      ]
  },
  {
      "name": "missouri",
      "series": [
          {
              "name": "23",
              "value": 2
          },
          {
              "name": "22",
              "value": 1
          }
      ]
  },
  {
      "name": "vanuatu",
      "series": [
          {
              "name": "27",
              "value": 1
          },
          {
              "name": "23",
              "value": 1
          },
          {
              "name": "22",
              "value": 1
          }
      ]
  },
  {
      "name": "philippines",
      "series": [
          {
              "name": "26",
              "value": 1
          },
          {
              "name": "23",
              "value": 1
          },
          {
              "name": "22",
              "value": 1
          }
      ]
  },
  {
      "name": "guadeloupe",
      "series": [
          {
              "name": "26",
              "value": 2
          }
      ]
  },
  {
      "name": "u.s. virgin islands",
      "series": [
          {
              "name": "25",
              "value": 2
          }
      ]
  },
  {
      "name": "algeria",
      "series": [
          {
              "name": "24",
              "value": 2
          }
      ]
  },
  {
      "name": "papua new guinea",
      "series": [
          {
              "name": "28",
              "value": 1
          },
          {
              "name": "26",
              "value": 1
          }
      ]
  },
  {
      "name": "colorado",
      "series": [
          {
              "name": "27",
              "value": 1
          },
          {
              "name": "26",
              "value": 1
          }
      ]
  },
  {
      "name": "svalbard and jan mayen",
      "series": [
          {
              "name": "27",
              "value": 1
          },
          {
              "name": "23",
              "value": 1
          }
      ]
  },
  {
      "name": "mexico",
      "series": [
          {
              "name": "26",
              "value": 1
          },
          {
              "name": "22",
              "value": 1
          }
      ]
  },
  {
      "name": "guyana",
      "series": [
          {
              "name": "26",
              "value": 1
          },
          {
              "name": "23",
              "value": 1
          }
      ]
  },
  {
      "name": "aleutian islands",
      "series": [
          {
              "name": "26",
              "value": 1
          },
          {
              "name": "23",
              "value": 1
          }
      ]
  },
  {
      "name": "el salvador",
      "series": [
          {
              "name": "26",
              "value": 1
          },
          {
              "name": "25",
              "value": 1
          }
      ]
  },
  {
      "name": "japan region",
      "series": [
          {
              "name": "25",
              "value": 1
          },
          {
              "name": "23",
              "value": 1
          }
      ]
  },
  {
      "name": "guatemala",
      "series": [
          {
              "name": "23",
              "value": 1
          },
          {
              "name": "22",
              "value": 1
          }
      ]
  },
  {
      "name": "pakistan",
      "series": [
          {
              "name": "28",
              "value": 1
          }
      ]
  },
  {
      "name": "italy",
      "series": [
          {
              "name": "27",
              "value": 1
          }
      ]
  },
  {
      "name": "dominica",
      "series": [
          {
              "name": "26",
              "value": 1
          }
      ]
  },
  {
      "name": "ecuador",
      "series": [
          {
              "name": "26",
              "value": 1
          }
      ]
  },
  {
      "name": "india",
      "series": [
          {
              "name": "26",
              "value": 1
          }
      ]
  },
  {
      "name": "south dakota",
      "series": [
          {
              "name": "26",
              "value": 1
          }
      ]
  },
  {
      "name": "timor leste",
      "series": [
          {
              "name": "25",
              "value": 1
          }
      ]
  },
  {
      "name": "wyoming",
      "series": [
          {
              "name": "25",
              "value": 1
          }
      ]
  },
  {
      "name": "maine",
      "series": [
          {
              "name": "25",
              "value": 1
          }
      ]
  },
  {
      "name": "georgia",
      "series": [
          {
              "name": "25",
              "value": 1
          }
      ]
  },
  {
      "name": "venezuela",
      "series": [
          {
              "name": "25",
              "value": 1
          }
      ]
  },
  {
      "name": "panama",
      "series": [
          {
              "name": "25",
              "value": 1
          }
      ]
  },
  {
      "name": "dominican republic",
      "series": [
          {
              "name": "24",
              "value": 1
          }
      ]
  },
  {
      "name": "democratic republic of the congo",
      "series": [
          {
              "name": "24",
              "value": 1
          }
      ]
  },
  {
      "name": "kentucky",
      "series": [
          {
              "name": "24",
              "value": 1
          }
      ]
  },
  {
      "name": "laikit ii (dimembe)",
      "series": [
          {
              "name": "23",
              "value": 1
          }
      ]
  },
  {
      "name": "tajikistan",
      "series": [
          {
              "name": "23",
              "value": 1
          }
      ]
  },
  {
      "name": "afghanistan",
      "series": [
          {
              "name": "23",
              "value": 1
          }
      ]
  },
  {
      "name": "mongolia",
      "series": [
          {
              "name": "23",
              "value": 1
          }
      ]
  },
  {
      "name": "iran",
      "series": [
          {
              "name": "23",
              "value": 1
          }
      ]
  },
  {
      "name": "nv",
      "series": [
          {
              "name": "23",
              "value": 1
          }
      ]
  },
  {
      "name": "illinois",
      "series": [
          {
              "name": "22",
              "value": 1
          }
      ]
  },
  {
      "name": "bolivia",
      "series": [
          {
              "name": "22",
              "value": 1
          }
      ]
  }
]

}
