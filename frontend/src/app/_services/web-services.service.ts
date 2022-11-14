import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class WebServicesService {
  //url:string = 'https://swapi.dev/api/films/';
  url: string = 'http://localhost:1234/api/comuCats';




  constructor(private http: HttpClient)
   { }

    getNewComunidad(){

      return this.http.get(this.url);
  
    }
      


}
