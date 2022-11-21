import { Component, OnInit, Inject, PLATFORM_ID, APP_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { WebServicesService } from '../_services/web-services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


const STATE_KEY_CAT = makeStateKey('newComucat');

@Component({
  selector: 'app-newcomuniti',
  templateUrl: './newcomuniti.component.html',
  styleUrls: ['./newcomuniti.component.css']
})
export class NewcomunitiComponent implements OnInit {

  newComunityForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private state: TransferState,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string,
    private webServices: WebServicesService) { 
      this.newComunityForm = this.fb.group({
        calle:[''], 
        cp:[''],
        ng:[''],
        coordenadas:[''],

      })
    }
  
    newComucat = {calle:'', cp: '', ng:''};

    addNewComunity(){
      console.log(this.newComunityForm);

    }

  post(){
    this.newComucat = this.state.get(STATE_KEY_CAT, <any> []);
    if(isPlatformServer(this.platformId)){ 
      this.webServices.postNewComu(this.newComucat).subscribe({
        next:(respuesta:any) =>{ 
          this.state.set(STATE_KEY_CAT, <any> respuesta);
          
        }
      });

    } 
 
  }

  ngOnInit(): void {
  }

}