import {Component, OnInit} from '@angular/core';
import {MdlSnackbarService} from "@angular-mdl/core";

@Component({
  selector: 'demo-content',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private mdlSnackbarService: MdlSnackbarService) {
  }

  ngOnInit() {
  }

  showSnackbar() {
    this.mdlSnackbarService.showSnackbar({
      message: 'The Message',
      action: {
        handler: () => {
          this.mdlSnackbarService.showToast('You hit the ok Button');
        },
        text: 'OK'
      }
    });
  }

}
