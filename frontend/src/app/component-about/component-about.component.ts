import { Component, OnInit, Inject, PLATFORM_ID, APP_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { WebServicesService } from '../_services/web-services.service';

const STATE_KEY_FILMS = makeStateKey('newComu');

@Component({
  selector: 'app-component-about',
  templateUrl: './component-about.component.html',
  styleUrls: ['./component-about.component.css']
})
export class ComponentAboutComponent implements OnInit {


 newComu: any;

  constructor(
    private state: TransferState,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string,
    private webServices: WebServicesService
    ) {
  }

  ngOnInit() {

   

    this.newComu = this.state.get(STATE_KEY_FILMS, <any> []);

   
    if(isPlatformServer(this.platformId)){
     // this.http.get(this.url).subscribe({
      this.webServices.getNewComunidad().subscribe({
        next:(respuesta:any) => {
          this.state.set(STATE_KEY_FILMS, <any> respuesta);
        }
      });
      }
    }
        
  }



