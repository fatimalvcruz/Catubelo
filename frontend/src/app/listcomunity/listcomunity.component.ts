import { Component, OnInit, Inject, PLATFORM_ID, APP_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { WebServicesService } from '../_services/web-services.service';
import { NewcomunitiComponent } from '../newcomuniti/newcomuniti.component';

const STATE_KEY_CAT = makeStateKey('comu');

@Component({
  selector: 'app-listcomunity',
  templateUrl: './listcomunity.component.html',
  styleUrls: ['./listcomunity.component.css']
})
export class ListcomunityComponent implements OnInit {
  

comu: any;

  constructor(private state: TransferState,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string,
    private webServices: WebServicesService) { 
    
    }

  ngOnInit(): void {
     this.comu = this.state.get(STATE_KEY_CAT, <any> []);
     let da = this.comu;
     if(isPlatformServer(this.platformId)){

       this.webServices.getNewComunidad().subscribe({
      next:(respuesta:any) => {
         this.state.set(STATE_KEY_CAT, <any> respuesta);
         
         }
       });

      }
  }

}
