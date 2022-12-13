import { Component, OnInit, Inject, PLATFORM_ID, APP_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { WebServicesService } from '../_services/web-services.service';
import { Comunity } from '../models/comunity';
import {  Router } from '@angular/router';

const STATE_KEY_CAT = makeStateKey('listcomunidad');

@Component({
  selector: 'app-listcomunity',
  templateUrl: './listcomunity.component.html',
  styleUrls: ['./listcomunity.component.css']
})
export class ListcomunityComponent implements OnInit {

listcomunidad: Comunity[] = [];
showModal: boolean = false;
mensajeModal: String = "";

  constructor(private state: TransferState,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string,
    private webServices: WebServicesService,
    private router: Router
    ) { }

    obtenerComunidades(){
      this.listcomunidad = this.state.get(STATE_KEY_CAT, <any> []);
      if(isPlatformServer(this.platformId)){
        this.webServices.getComunidades().subscribe({
          next:(respuesta:any) => {this.state.set(STATE_KEY_CAT, <any> respuesta);},
          error:(respuesta:Response) =>{console.log('mucho error')}
          });
       }    
    }

    eliminarComunidad(id:any){
      this.webServices.eliminarComunidad(id).subscribe({
        next:(respuesta:any) =>{respuesta = this.obtenerComunidades();
          this.showModal = true;
          this.mensajeModal = "Colonia eliminada con éxito";
        },
        error:(error:Response) =>{  console.log(error)}
      });
    }

    upModal(){
      this.showModal = false;
      this.router.navigate(['/listcomunity']).then(() => {
        window.location.reload();
      });
    }

    ngOnInit(): void {
      this.obtenerComunidades();
    } 
}

  





  