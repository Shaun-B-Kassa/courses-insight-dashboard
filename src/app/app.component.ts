import { Component, ElementRef, OnInit, inject } from '@angular/core';
import * as Dashboards from '@highcharts/dashboards/dashboards';
import DataGrid from '@highcharts/dashboards/es-modules/DataGrid/DataGrid';
import * as Highcharts from 'highcharts';
import HighchartsPlugin from '@highcharts/dashboards/es-modules/Dashboards/Plugins/HighchartsPlugin';
import DataGridPlugin from '@highcharts/dashboards/es-modules/Dashboards/Plugins/DataGridPlugin';

// import more from 'highcharts/highcharts-more';
// more(Highcharts);
import { HighchartsChartModule } from 'highcharts-angular';
import { CoinsService } from './service/coins.service';
import { map, tap } from 'rxjs';


HighchartsPlugin.custom.connectHighcharts(Highcharts as any);
(Dashboards.PluginHandler as any).addPlugin(HighchartsPlugin);

DataGridPlugin.custom.connectDataGrid(DataGrid);
(Dashboards.PluginHandler as any).addPlugin(DataGridPlugin);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  coinsSrvice = inject(CoinsService);
  coinsData: [] = [];
  private options = {};
  private readonly isAsync = true;

  constructor(public elementRef: ElementRef) {}

  ngOnInit() {
    this.setOptions();
    this.renderDashboard();
     this.coinsSrvice.getCoins().subscribe(data => this.coinsData = data);
  }

  private renderDashboard() {
    Dashboards.board(this.elementRef.nativeElement, this.options, this.isAsync);
  }

  private setOptions() {
    this.options = {
      dataPool: {
        connectors: [
          {
            id: 'micro-element',
            type: 'JSON',
            options: {
              firstRowAsNames: false,
              columnNames: ['Food', 'Vitamin A', 'Iron'],
              data: [
                ['Beef Liver', 6421, 6.5],
                ['Lamb Liver', 2122, 6.5],
                ['Cod Liver Oil', 1350, 0.9],
                ['Mackerel', 388, 1],
                ['Tuna', 214, 0.6],
              ],
            },
          },
        ],
      },
      editMode: {
        enabled: true,
        contextMenu: {
          enabled: true,
          items: ['editMode'],
        },
      },
      gui: {
        layouts: [
          {
            rows: [
              {
                cells: [
                  {
                    responsive: {
                      small: {
                        width: '100%',
                      },
                      medium: {
                        width: '50%',
                      },
                      large: {
                        width: '30%',
                      },
                    },
                    layout: {
                      rows: [
                        {
                          cells: [
                            {
                              id: 'kpi-vitamin-a',
                              responsive: {
                                small: {
                                  width: '50%',
                                },
                                medium: {
                                  width: '100%',
                                },
                                large: {
                                  width: '100%',
                                },
                              },
                              height: 205,
                            },
                            {
                              responsive: {
                                small: {
                                  width: '50%',
                                },
                                medium: {
                                  width: '100%',
                                },
                                large: {
                                  width: '100%',
                                },
                              },
                              id: 'kpi-iron',
                              height: 205,
                            },
                          ],
                        },
                      ],
                    },
                  },
                  {
                    id: 'dashboard-col-0',
                    responsive: {
                      small: {
                        width: '100%',
                      },
                      medium: {
                        width: '25%',
                      },
                      large: {
                        width: '35%',
                      },
                    },
                  },
                  {
                    id: 'dashboard-col-1',
                    responsive: {
                      small: {
                        width: '100%',
                      },
                      medium: {
                        width: '25%',
                      },
                      large: {
                        width: '35%',
                      },
                    },
                  },
                ],
              },
              {
                cells: [
                  {
                    id: 'dashboard-col-2',
                    height: 323,
                  },
                ],
              },
            ],
          },
        ],
      },
      components: [
        {
          type: 'KPI',
          cell: 'kpi-vitamin-a',
          value: 900,
          valueFormat: '{value}',
          title: 'Vitamin A',
          subtitle: 'daily recommended dose',
        },
        {
          type: 'KPI',
          cell: 'kpi-iron',
          value: 8,
          title: 'Iron',
          valueFormat: '{value}',
          subtitle: 'daily recommended dose',
        },
        {
          cell: 'title',
          type: 'HTML',
          elements: [
            {
              tagName: 'h1',
              textContent: 'MicroElement amount in Foods',
            },
          ],
        },
        {
          sync: {
            visibility: true,
            highlight: true,
            extremes: true,
          },
          connector: {
            id: 'micro-element',
          },
          cell: 'dashboard-col-0',
          type: 'Highcharts',
          columnAssignment: {
            Food: 'x',
            'Vitamin A': 'value',
          },
          chartOptions: {
            xAxis: {
              type: 'category',
              accessibility: {
                description: 'Groceries',
              },
            },
            yAxis: {
              title: {
                text: 'mcg',
              },
              plotLines: [
                {
                  value: 900,
                  zIndex: 7,
                  dashStyle: 'shortDash',
                  label: {
                    text: 'RDA',
                    align: 'right',
                    style: {
                      color: '#B73C28',
                    },
                  },
                },
              ],
            },
            credits: {
              enabled: false,
            },
            plotOptions: {
              series: {
                marker: {
                  radius: 6,
                },
              },
            },
            legend: {
              enabled: true,
              verticalAlign: 'top',
            },
            chart: {
              animation: false,
              type: 'column',
              spacing: [30, 30, 30, 20],
            },
            title: {
              text: '',
            },
            tooltip: {
              valueSuffix: ' mcg',
              stickOnContact: true,
            },
            lang: {
              accessibility: {
                chartContainerLabel:
                  'Vitamin A in food. Highcharts Interactive Chart.',
              },
            },
            accessibility: {
              description: `The chart is displaying the Vitamin A amount in
                  micrograms for some groceries. There is a plotLine demonstrating
                  the daily Recommended Dietary Allowance (RDA) of 900
                  micrograms.`,
              point: {
                valueSuffix: ' mcg',
              },
            },
          },
        },
        {
          cell: 'dashboard-col-1',
          sync: {
            visibility: true,
            highlight: true,
            extremes: true,
          },
          connector: {
            id: 'micro-element',
          },
          type: 'Highcharts',
          columnAssignment: {
            Food: 'x',
            Iron: 'y',
          },
          chartOptions: {
            xAxis: {
              type: 'category',
              accessibility: {
                description: 'Groceries',
              },
            },
            yAxis: {
              title: {
                text: 'mcg',
              },
              max: 8,
              plotLines: [
                {
                  value: 8,
                  dashStyle: 'shortDash',
                  label: {
                    text: 'RDA',
                    align: 'right',
                    style: {
                      color: '#B73C28',
                    },
                  },
                },
              ],
            },
            credits: {
              enabled: false,
            },
            plotOptions: {
              series: {
                marker: {
                  radius: 6,
                },
              },
            },
            title: {
              text: '',
            },
            legend: {
              enabled: true,
              verticalAlign: 'top',
            },
            chart: {
              animation: false,
              type: 'column',
              spacing: [30, 30, 30, 20],
            },
            tooltip: {
              valueSuffix: ' mcg',
              stickOnContact: true,
            },
            lang: {
              accessibility: {
                chartContainerLabel:
                  'Iron in food. Highcharts Interactive Chart.',
              },
            },
            accessibility: {
              description: `The chart is displaying the Iron amount in
                  micrograms for some groceries. There is a plotLine demonstrating
                  the daily Recommended Dietary Allowance (RDA) of 8
                  micrograms.`,
              point: {
                valueSuffix: ' mcg',
              },
            },
          },
        },
        {
          cell: 'dashboard-col-2',
          connector: {
            id: 'micro-element',
          },
          type: 'DataGrid',
          editable: true,
          sync: {
            highlight: true,
            visibility: true,
          },
        },
      ],
    };
  }
}
