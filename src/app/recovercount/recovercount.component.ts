import { Component, OnInit, Input } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-recovercount',
  templateUrl: './recovercount.component.html',
  styleUrls: ['./recovercount.component.css']
})
export class RecovercountComponent implements OnInit {

  constructor(public service: CommonserviceService) { }

  @Input()
  darkMode

  /**
   * CSS Properties
   */
  container= 'container';
  countInfo= 'countInfo';
  scroll = 'scroll';

  country;
  TotalRecoverd;
  ngOnInit(): void {
    this.service.staticsReport.subscribe(data => {
      this.country = Object.values(data['Countries']).sort((a,b) => (a['TotalRecovered'] < b['TotalRecovered']) ? 1 : -1);
      this.TotalRecoverd = data['Global'].TotalRecovered;
    });
  }

}
