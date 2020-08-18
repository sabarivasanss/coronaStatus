import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.css']
})
export class MapviewComponent implements OnInit {

  constructor(private service: CommonserviceService, private changeDetector: ChangeDetectorRef) { }
  title = '';
  type = 'GeoChart';

  public countryList;
  public statusReport = [];
  public allOverStatus = [];
  mapBackGround;

  @Input()
  darkMode

 columnNames = ["Latitude","Longitude", "Name"];
 options_dark = {
  backgroundColor:  "#05021c" ,
  showTip: true,
  colors:"red",
  legend: {position: 'bottom', textStyle: {color: 'blue', fontSize: 16}},
};
  options = {   
      backgroundColor:'white',
      showTip: true,
      colors:"red",
      legend: {position: 'bottom', textStyle: {color: 'blue', fontSize: 16}},
  };
  width = 500;
  height = 500;

  ngOnInit(): void {
    if(!this.darkMode) {
      this.options.backgroundColor = 'white';
    } else {
      this.options.backgroundColor = '#05021c';
    }
    this.changeDetector.detectChanges();
    this.service.staticsReport.subscribe(data => {
      this.countryList = Object.values(data['Countries']).map(t => { return t['Slug'] });
      this.countryList = this.countryList.slice(0,9);
        
     this.countryList.forEach(element => {
          this.service.getMapvalue(element).subscribe((data) => {
                let sampleArray = [];
                  sampleArray.push(parseInt(data[0].Lat))
                  sampleArray.push(parseInt(data[0].Lon))
                  sampleArray.push(parseInt(data[0].Confirmed))
                  this.statusReport.push(sampleArray)
                  this.allOverStatus.push(data[0]);
          })
      });
    })
  }


  ChangeStatus(status) {
    this.statusReport = [];
      this.allOverStatus.forEach((element, i) => {
        let sampleArray = [];
        sampleArray.push(parseInt(element.Lat))
        sampleArray.push(parseInt(element.Lon))
        sampleArray.push(parseInt(this.allOverStatus[i][status]))
        this.statusReport.push(sampleArray)
      })
  }
}
