import { Component, OnInit,   } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-component-home',
  templateUrl: './component-home.component.html',
  styleUrls: ['./component-home.component.css']
})
export class ComponentHomeComponent implements OnInit {
  cp:string | null | undefined;

  constructor(private route: ActivatedRoute , private router: Router) {}

  ngOnInit(): void {}
  goCcp(){
    this.router.navigate(['/listcomunity', this.cp]).then(() => {
      window.location.reload();
    });
    
  }
}
