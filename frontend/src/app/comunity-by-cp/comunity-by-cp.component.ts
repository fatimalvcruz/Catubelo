import { Component, OnInit,  Inject, PLATFORM_ID, APP_ID } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Comunity } from '../models/comunity';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { WebServicesService } from '../_services/web-services.service';

const STATE_KEY_CP = makeStateKey('cpComunidades');


@Component({
  selector: 'app-comunity-by-cp',
  templateUrl: './comunity-by-cp.component.html',
  styleUrls: ['./comunity-by-cp.component.css']
})
export class ComunityByCpComponent implements OnInit {
  cp: any;
  cpComunidades: Comunity[] = [];
  listcomunidad: Comunity[] = [];


constructor(private route: ActivatedRoute,
      private state: TransferState,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string,
    private webServices: WebServicesService) { }


    obtenerCpostales(){
      this.cp = (this.route.snapshot.params['cp']);
      this.cpComunidades = this.state.get(STATE_KEY_CP, <any> []);
      if(isPlatformServer(this.platformId)){
        this.webServices.filtrarComunidadesCp(this.cp).subscribe({
          next:(respuesta:any) => {this.state.set(STATE_KEY_CP, <any> respuesta);},
          error:(respuesta:Response) =>{console.log('mucho error')}
          });
       }
    }

    ngOnInit(): void {
    this.obtenerCpostales();
    
    }
}
