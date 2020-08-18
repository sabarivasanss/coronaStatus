import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {


  @Input()
  darkMode

  /**
   * CSS Properties
   */
  container= 'container';

  title = 'Country based Corono Status';
  type = 'LineChart';
  
  options_dark = {
    
    backgroundColor: "#0c072e", 
     hAxis: {
      textStyle: {color: "white"}
     },
     vAxis:{
        title: 'Peopel Count',
        titleTextStyle: {
          color: 'white'
        },
        textStyle: {color: "white"}
     },
     legend: {position: 'bottom', textStyle: {color: 'red', fontSize: 16}},
  }
  options = { 
    backgroundColor: "white", 
     vAxis:{
        title: 'Peopel Count'
     },
     legend: {textStyle: {color: 'white', fontSize: 16}},
  };
  width = 400;
  height = 300;
  
  constructor(private service: CommonserviceService, private cdf: ChangeDetectorRef) { }

  
  countryList;
  countryInfo;
  lineChartData = [];
  StatusList = ['Active', 'Confirmed', 'Recovered'];
  statusType = 'Active';
  StatusReport = [];
  ngOnInit(): void {
    this.service.staticsReport.subscribe(data => {
      this.countryInfo = Object.values(data['Countries']);
      this.countryList = Object.values(data['Countries']).map(t => { return t['Country'] });
    })
    
    this.service.lineChartReport.subscribe(data => {
      this.lineChartData = [];
      this.StatusReport = [];
      Object.values(data).forEach((test, i) => {
        let sampleArray = [];
          if(this.lineChartData.length < 10 && this.lineChartData.find(t => t===test.Date) === undefined) {
              sampleArray.push(test.Date);
              sampleArray.push(data[i][this.statusType]);
              this.lineChartData[i] = sampleArray;
              this.StatusReport.push(test);
          }
      })
      console.log(this.lineChartData)
    })
}
changeCity(e) {
  let countrySlug = Object.values(this.countryInfo ).filter(c => { 
    if(c['Country']=== e.target.value) { 
      return c['Slug'] }});
  this.service.getWorldWideInfo(countrySlug[0]['Slug']);
}

ChangeStatus(e) {
    this.lineChartData = [];
    this.statusType = e.target.value;
    this.StatusReport.forEach((test, i) => {
       let sampleArray = [];
       sampleArray.push(test.Date);
       sampleArray.push(this.StatusReport[i][this.statusType]);
       this.lineChartData.push(sampleArray);
    })
}

}
