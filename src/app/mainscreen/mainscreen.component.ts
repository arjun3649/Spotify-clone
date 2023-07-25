import { Component } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.css']
})
export class MainscreenComponent {
  constructor(private router:Router){}
  
  login()
  {
    this.router.navigate(['/loginpage'])
  }
  search()
  {
    this.router.navigate(['/searchpage'])
  }


}
