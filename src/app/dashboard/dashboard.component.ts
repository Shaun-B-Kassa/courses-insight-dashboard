import { Component, ElementRef, OnInit } from '@angular/core';
import * as Dashboards from '@highcharts/dashboards/dashboards';
import DataGrid from '@highcharts/dashboards/es-modules/DataGrid/DataGrid';
import * as Highcharts from 'highcharts';
import HighchartsPlugin from '@highcharts/dashboards/es-modules/Dashboards/Plugins/HighchartsPlugin';
import DataGridPlugin from '@highcharts/dashboards/es-modules/Dashboards/Plugins/DataGridPlugin';

// import more from 'highcharts/highcharts-more';
// more(Highcharts);
import { HighchartsChartModule } from 'highcharts-angular';


HighchartsPlugin.custom.connectHighcharts(Highcharts as any);
(Dashboards.PluginHandler as any).addPlugin(HighchartsPlugin);

DataGridPlugin.custom.connectDataGrid(DataGrid);
(Dashboards.PluginHandler as any).addPlugin(DataGridPlugin);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {

  // HighchartsLine: typeof Highcharts = Highcharts;
  // chartOptions: Highcharts.Options = {
  //   title: { text: 'Sales' },
  //   subtitle: { text: 'Fiscal Year 2024' },
  //   xAxis: {
  //     title: { text: 'Month' },
  //     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  //   },
  //   yAxis: {
  //     title: { text: 'Sales' },
  //     tickInterval: 5,
  //   },
  //   series: [
  //     {
  //       name: 'Model R',
  //       data: [5, 8, 11, 19, 7, 8],
  //       type: 'line',
  //       color: '#2A9FBC',
  //     },
  //     {
  //       name: 'Model R2',
  //       data: [3, 4, 13, 36, 27, 18],
  //       type: 'line',
  //       color: '#F15B2A',
  //     },
  //   ],
  //   legend: { enabled: true },
  // };

  // HighchartsLineDataPoints: typeof Highcharts = Highcharts;
  // chartOptionsLineDataPoints: Highcharts.Options = {
  //   title: { text: 'Sales' },
  //   subtitle: { text: 'Fiscal Year 2024' },
  //   xAxis: {
  //     title: { text: 'Month' },
  //     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  //   },
  //   yAxis: {
  //     title: { text: 'Sales' },
  //     tickInterval: 5,
  //   },
  //   series: [
  //     {
  //       name: 'Model R',
  //       data: [5, 8, 11, 19, 7, 8],
  //       type: 'line',
  //       color: '#2A9FBC',
  //     },
  //     {
  //       name: 'Model R2',
  //       data: [3, 4, 13, 36, 27, 18],
  //       type: 'line',
  //       color: '#F15B2A',
  //     },
  //   ],
  //   legend: { enabled: true },
  // };

  
  // HighchartsSorting: typeof Highcharts = Highcharts;
  // chartOptionsSorting: Highcharts.Options = {
  //   title: { text: 'Sales' },
  //   subtitle: { text: 'Fiscal Year 2024' },
  //   xAxis: {
  //     title: { text: 'Month' },
  //     type: 'category',
  //     reversed: false
  //   },
  //   yAxis: {
  //     title: { text: 'Sales' },
  //     tickInterval: 5,
  //   },
  //   series: [
  //     {
  //       name: 'Model R',
  //       data: [
  //        ['Jan', 5], 
  //        ['Feb', 8], 
  //        {
  //         name:'Mar',
  //         y: 11,
  //         color: '#2A9FBC'
  //        },
  //        ['Apr', 19],
  //        ['May', 7],
  //        ['Jun', 8],
  //       ],
  //       type: 'bar',
  //       color: '#2A9FBC',
  //       dataSorting: {
  //         enabled: true,
  //         sortKey: 'name'
          
  //       }
  //     }
  //   ],
  //   legend: { enabled: true },
  // };















  // HighchartsTable: typeof Highcharts = Highcharts;
  // chartOptionsTable: Highcharts.Options = {
  //   title: { text: 'Sales' },
  //   subtitle: { text: 'Fiscal Year 2024' },
  //   xAxis: {
  //     title: { text: 'Month' },
  //     type: 'category',
  //     reversed: false
  //   },
  //   yAxis: {
  //     title: { text: 'Sales' },
  //     tickInterval: 5,
  //   },
  //   data: { table: 'salestable'},
  //   legend: { enabled: true },
  // };

  // HighchartsArea: typeof Highcharts = Highcharts;

  // chartOptionsArea: Highcharts.Options = {
  //   title: { text: 'Sales' },
  //   subtitle: { text: 'Fiscal Year 2024' },
  //   xAxis: {
  //     title: { text: 'Month' },
  //     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  //   },
  //   yAxis: {
  //     title: { text: 'Sales' },
  //     tickInterval: 5,
  //   },
  //   series: [
  //     {
  //       name: 'Model R',
  //       data: [5, 8, 11, 19, 7, 8],
  //       type: 'area',
  //       color: '#2A9FBC',
  //     },
  //   ],
  //   legend: { enabled: true },
  // };

  // HighchartsPie: typeof Highcharts = Highcharts;

  // chartOptionsPie: Highcharts.Options = {
  //   plotOptions: {
  //     pie: {
  //       dataLabels: {
  //         enabled: true,
  //         format: '{point.percentage:.1f}',
  //       },
  //     },
  //   },
  //   title: { text: 'Sales' },
  //   subtitle: { text: 'Fiscal Year 2024' },
  //   xAxis: {
  //     title: { text: 'Month' },
  //     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  //   },
  //   yAxis: {
  //     title: { text: 'Sales' },
  //     tickInterval: 5,
  //   },
  //   series: [
  //     {
  //       name: 'Model R',
  //       data: [5, 8, 11, 19, 7, 8],
  //       type: 'pie',
  //       color: '#2A9FBC',
  //     },
  //   ],
  //   legend: { enabled: true },
  // };

  // HighchartsPolar: typeof Highcharts = Highcharts;

  // chartOptionsPolar: Highcharts.Options = {
  //   chart: {
  //     polar: true,
  //   },

  //   pane: {
  //     startAngle: 0,
  //     endAngle: 360,
  //   },

  //   xAxis: {
  //     tickInterval: 45,
  //     min: 0,
  //     max: 360,
  //     labels: {
  //       formatter: function () {
  //         return this.value + '°';
  //       },
  //     },
  //   },

  //   yAxis: {
  //     min: 0,
  //   },

  //   plotOptions: {
  //     series: {
  //       pointStart: 0,
  //       pointInterval: 45,
  //     },
  //     column: {
  //       pointPadding: 0,
  //       groupPadding: 0,
  //     },
  //   },

  //   series: [
  //     {
  //       type: 'column',
  //       name: 'Column',
  //       data: [8, 7, 6, 5, 4, 3, 2, 1],
  //       pointPlacement: 'between',
  //     },
  //     {
  //       type: 'line',
  //       name: 'Line',
  //       data: [1, 2, 3, 4, 5, 6, 7, 8],
  //     },
  //     {
  //       type: 'area',
  //       name: 'Area',
  //       data: [1, 8, 2, 7, 3, 6, 4, 5],
  //     },
  //   ],
  // };
}
