import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  newNote = {
    description: '',
    state: 'TODO',
    priority: 'NORMAL',
  };

  constructor(private modalCtrl: ModalController) {}

  closeModal() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  saveNote() {
    this.modalCtrl.dismiss(this.newNote, 'save');
  }
}
