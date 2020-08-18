import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonserviceService } from './commonservice.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Covid19 Status';

  constructor(public service: CommonserviceService, private route: Router){
  }
 
}
