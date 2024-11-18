import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private modalCtrl: ModalController) {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      backdropDismiss: false, // Modal fecha apenas se carregarmos no botao Fechar
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
  }
}
