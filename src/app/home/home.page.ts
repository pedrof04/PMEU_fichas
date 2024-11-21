import { Component, OnInit } from '@angular/core';

import {
  LoadingController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  apiUrl: string = 'https://mobile-api-one.vercel.app/api';
  name: string = 'f.pedro@ipvc.pt';
  password: string = 'G8z&yQ3T';
  notes: any;

  constructor(
    private modalCtrl: ModalController,
    private http: HttpClient,
    private loadingCtrl: LoadingController,
    private toastController: ToastController
  ) {}

  async ngOnInit() {
    await this.getNotes();
  }

  async getNotes() {
    const loading = await this.showLoading();

    const headers = new HttpHeaders({
      Authorization: `Basic ${btoa(`${this.name}:${this.password}`)}`,
    });

    try {
      this.notes = await firstValueFrom(
        this.http.get<any>(`${this.apiUrl}/notes`, { headers })
      );
      loading.dismiss();
      if (this.notes.length == 0) {
        //await this.presentToast(`There are no notes available 😥`, 'warning');
      } else {
        //await this.presentToast(`Success getting ${this.notes.length} notes 🚀`, 'success');
      }
    } catch (error: any) {
      loading.dismiss();
      //await this.presentToast(error.error, 'danger');
    }
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading',
    });

    loading.present();

    return loading;
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      backdropDismiss: false, // Modal fecha apenas se carregarmos no botao Fechar
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
  }
}
