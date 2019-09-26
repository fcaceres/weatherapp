import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Zipcodemodel } from './zipcodemodel'




@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  zipcodemodel: Zipcodemodel;
  constructor(private http: HttpClient) { }

  getdata1(): Observable<Zipcodemodel[]>{
    return this.http.get<Zipcodemodel[]>('/assets/data.json').map(data => { return data;})
  }
  debugger;
  zipdatax(zipcode){
    return this.http.get<Zipcodemodel[]>('api' + zipcode + '/radians')
    .subscribe((data: Zipcodemodel[]) => this.zipcodemodel = {
      zip_code: data['zip_code'],
      lat: data['lat'],
      lng:  data['lng'],
      city: data['city'],
      state: data['state'],
      timezone: data['timezone'],
      acceptable_city_names: data[''],
      area_codes: data['']
      
  });
 
  }

 
}
