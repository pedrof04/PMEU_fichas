import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  name: string | undefined;

  constructor(private modalCtrl: ModalController) {}

  fechar() {
    return this.modalCtrl.dismiss(null, 'fechar');
  }

  apagar() {
    return;
  }
}
