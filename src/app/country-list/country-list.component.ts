import { Component, OnInit, Input } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  constructor(public service: CommonserviceService) { }

  country;
  totalConfirmed;

  /**
   * CSS Properties
   */
  container= 'container';
  countInfo= 'countInfo';
  scroll = 'scroll';
  
 /**
  * Enable and Disable the Darkmode
  */
  @Input()
  darkMode

  ngOnInit(): void {
    console.log("contry list");
    this.service.staticsReport.subscribe(data => {
      console.log("inside contry list");
      console.log(data);
      this.country = 
      Object.values(data['Countries']).sort((a,b) => (a['TotalConfirmed'] < b['TotalConfirmed']) ? 1 : -1);
      this.totalConfirmed = data['Global'].TotalConfirmed;
    })
  }

}
