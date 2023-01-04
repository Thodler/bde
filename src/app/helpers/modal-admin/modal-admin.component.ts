import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-admin',
  templateUrl: './modal-admin.component.html',
  styleUrls: ['./modal-admin.component.scss'],
})
export class ModalAdminComponent implements OnInit {

  constructor() { }

  presentingElement:any = null;

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

}
