import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router: Router) {}
 
  goToTags() {
    if(localStorage.getItem('userToken')) {
      this.router.navigate(['/tags']);
    } else {
      this.router.navigate(['/tab3']);
   }
  }
}


