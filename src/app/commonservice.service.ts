import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

let header = new HttpHeaders();
header.set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  ChangeCountry = false;

  
  staticsReport: Subject<Object> = new Subject();

  lineChartReport: Subject<Object> = new Subject();

  constructor(private http: HttpClient) {
    console.log("inside the service");
      this.http.get('https://api.covid19api.com/summary').subscribe(data => {
        this.staticsReport.next(data);
    });
    
    this.http.get('https://api.covid19api.com/dayone/country/'+ "afghanistan").subscribe(data => {
      console.log("data vvalue updated")
      this.lineChartReport.next(data);
    });
    
  }


  toggleNightMode(className, darkMode) {
    if(!darkMode) {
      return className;
    } else {
      return className+'-dark';
    }
  }

  getMapvalue(slug) {
    return this.http.get('https://api.covid19api.com/live/country/'+ slug);
  }
  getWorldWideInfo(slug) {
       this.http.get('https://api.covid19api.com/live/country/'+slug).subscribe(data => {
       this.lineChartReport.next(data);
    });

  }

}
