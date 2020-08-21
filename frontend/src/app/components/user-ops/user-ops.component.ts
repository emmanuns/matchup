import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-ops',
  templateUrl: './user-ops.component.html',
  styleUrls: ['./user-ops.component.scss'],
})
export class UserOpsComponent implements OnInit {
  @Input("showALl") showAll;
  toggleString: string;

  constructor(public popoverController: PopoverController,
              public router: Router) { }

  ngOnInit() {
    if(this.showAll) {
      this.toggleString = 'Visualizar seguidos';
    } else {
      this.toggleString = 'Visualizar todos';
    }
  }

  toggleShowAll() {
    this.showAll = !this.showAll;
    this.popoverController.dismiss(this.showAll);
  }

  goToConfig() {
    this.popoverController.dismiss();
    this.router.navigate(['/config']);
  }

}
