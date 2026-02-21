import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.css']
})
export class HighchartComponent implements OnInit{
  Highcharts:typeof Highcharts=Highcharts;
  chartOptions:Highcharts.Options ={
    chart:{type:'line'},
    title:{text:'Account Count'},
    xAxis:{categories:[] },
    yAxis:{title:{text:'Sales Amount'}},
    series:[{name:'Sales',type:'line',data:[]}]
  };
  private apiUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) {} 
  
  ngOnInit(): void {
    this.fetchChartData();

  }
  fetchChartData(): void{
    this.http.get<any[]>(`${this.apiUrl}/account/list`)
    .subscribe((data: any[]) =>{
      const accounts = data.map(item => item.accountid);
      const salesData = data.map(item => item.accountcity);
      this.chartOptions ={
        ...this.chartOptions,
        xAxis: { categories: accounts },
        series:[{name:'sales',type:'line',data :salesData}]
      };
    });
  }

}
