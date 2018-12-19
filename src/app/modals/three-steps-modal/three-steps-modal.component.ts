import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-three-steps-modal',
  templateUrl: './three-steps-modal.component.html',
  styleUrls: ['./three-steps-modal.component.scss']
})
export class ThreeStepsModalComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
