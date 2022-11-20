import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcomuniti',
  templateUrl: './newcomuniti.component.html',
  styleUrls: ['./newcomuniti.component.css']
})
export class NewcomunitiComponent implements OnInit {

  constructor() { }
  comucat = {calle:'', cp: '', ng:''};

  post(){
    console.log(this.comucat);
  }

  ngOnInit(): void {
  }

}
