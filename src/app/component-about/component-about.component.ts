import { Component, OnInit, Inject, PLATFORM_ID, APP_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/platform-browser';

const STATE_KEY_FILMS = makeStateKey('peliculas');

@Component({
  selector: 'app-component-about',
  templateUrl: './component-about.component.html',
  styleUrls: ['./component-about.component.css']
})
export class ComponentAboutComponent implements OnInit {

  url:string = 'https://swapi.dev/api/films/';
  peliculas: any;

  constructor(private http: HttpClient,
    private state: TransferState,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
    ) {
  }

  ngOnInit() {

    this.peliculas = this.state.get(STATE_KEY_FILMS, <any> []);

    if(isPlatformServer(this.platformId)){
      
      this.http.get(this.url).subscribe({
        next:(respuesta:any) => {
          this.state.set(STATE_KEY_FILMS, <any> respuesta.results);
        }
      });
    }
  }
}


