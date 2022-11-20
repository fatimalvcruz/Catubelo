import { Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})



export class WebServicesService {


  comu: any;

  // url: string = 'http://localhost:1234/api/comuCats';

  APIURL = 'http://localhost:1234/api';

  constructor(private http: HttpClient)
  
   { }

    getNewComunidad(){

       return this.http.get(this.APIURL + '/comuCats');
  
    }

    postNewComu(_comucat:any){
      return this.http.post(this.APIURL + '/comucat', _comucat);
  
    }
      


}
