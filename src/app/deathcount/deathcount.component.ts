import { Component, OnInit, Input } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-deathcount',
  templateUrl: './deathcount.component.html',
  styleUrls: ['./deathcount.component.css']
})
export class DeathcountComponent implements OnInit {

  constructor(public service: CommonserviceService) { }

  country;
  TotalDeath;


  /**
   * CSS Properties
   */
  container= 'container';
  countInfo= 'countInfo';
  scroll = 'scroll';

  @Input()
  darkMode
  
  ngOnInit(): void {
    this.service.staticsReport.subscribe(data => {
      this.country = Object.values(data['Countries']).sort((a,b) => (a['TotalDeaths'] < b['TotalDeaths']) ? 1 : -1);
      this.TotalDeath = data['Global'].TotalDeaths;
    });
  }

}
