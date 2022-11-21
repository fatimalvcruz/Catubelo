import { Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})

export class WebServicesService {


  APIURL = 'http://localhost:1234/api';

  respuesta:any;

  constructor(private http: HttpClient)
   { 
   }

    getNewComunidad(){
       return this.http.get(this.APIURL + '/comucats');
  
    }

    postNewComu(_newComucat: {calle:string, cp:string, ng:string}){
      return this.http.post(this.APIURL + '/comucat', _newComucat);
    }

}
