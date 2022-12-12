import { Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comunity } from '../models/comunity';

@Injectable({
  providedIn: 'root'
})

export class WebServicesService {


  APIURL = 'http://localhost:1234/api/comunidades/'

  constructor(private http: HttpClient)
   { }
   
   getComunidades(): Observable<any>{
    return this.http.get(this.APIURL);
   }

   eliminarComunidad(id:string):Observable<any>{
    return this.http.delete(this.APIURL + id);
   }

   guardarComunidad(comunidad: Comunity):Observable<any>{
    return this.http.post(this.APIURL, comunidad);

   }

   obtenerComunidad(id:string):Observable<any>{
    return this.http.get(this.APIURL + id);
   }

    editarComunidad(id:string, comunidad: Comunity):Observable<any>{
      return this.http.put(this.APIURL +id, comunidad);
    }

    filtrarComunidadesCp(cp:string):Observable<any>{
    return this.http.get(this.APIURL +'/cp/'+ cp);
   
   }





  
}

