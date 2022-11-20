import { Component, OnInit, Inject, PLATFORM_ID, APP_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { WebServicesService } from '../_services/web-services.service';


const STATE_KEY_FILMS = makeStateKey('  newComucat');
@Component({
  selector: 'app-newcomuniti',
  templateUrl: './newcomuniti.component.html',
  styleUrls: ['./newcomuniti.component.css']
})
export class NewcomunitiComponent implements OnInit {

  constructor(private state: TransferState,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string,
    private webServices: WebServicesService) { }
  newComucat = {calle:'', cp: '', ng:''};

  post(){

    this.newComucat = this.state.get(STATE_KEY_FILMS, <any> []);

    if(isPlatformServer(this.platformId)){ 

      this.webServices.postNewComu(this.newComucat).subscribe({
        next:(respuesta:any) =>{ 
          this.state.set(STATE_KEY_FILMS, <any> respuesta);
        }
      });

    } 
   console.log(this.newComucat);
  }

  ngOnInit(): void {
  }

}
