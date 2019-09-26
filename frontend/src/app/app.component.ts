import { Component } from '@angular/core';
import { DataserviceService } from './services/data.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Zipcodemodel } from './services/zipcodemodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Weather App';
  zipdata: any = []
  pos: number;
  zipcode :string;

  constructor(public dataService: DataserviceService, public http: HttpClient) { }

  searchcity(){
    
    this.dataService.zipdatax(this.zipcode);   

  }
  clear(){
    this.zipcode = '';
  }

  // onSubmit = function (zipcode) {
  //   console.log(zipcode);

  //   var body = "firstname=" + user.firstname + "&lastname=" + user.lastname + "&name=" + user.name;
  //   this.http.post("http://www.testtttt.com", body).subscribe((data) => {});

  // }

}


