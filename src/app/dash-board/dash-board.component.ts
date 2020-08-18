import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';
import { HostListener } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor(private cdRef: ChangeDetectorRef, 
            public service: CommonserviceService,
            public route: Router) { }

  padding_5: 'padding-5';
  ngOnInit(): void {
  }
  body= 'body';
  col_sm_4='col-sm-4';
  deathContainer = 'deathContainer';
  recoverdContainer = 'recoverdContainer';
  lineChartContainer= 'lineChartContainer';
  darkMode = false;
  toggle() {
      this.darkMode = !this.darkMode;
  }

    getLable() {
      if(!this.darkMode) {
        return 'body-light';
      } else {
        return 'body-dark';
      }
    }
     
  }
