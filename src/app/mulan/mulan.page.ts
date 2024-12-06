import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AlertController, ModalController } from '@ionic/angular';
import { logoIonic } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mulan',
  templateUrl: './mulan.page.html',
  styleUrls: ['./mulan.page.scss'],
})
export class MulanPage implements OnInit {
  dataMulan: any;
  modalTambah: any;
  id: any;
  nama: any;
  story: any;
  modalEdit: any;

  constructor(
    private api: ApiService,
    private modal: ModalController,
    private alert: AlertController,
    private authService: AuthenticationService,
    private router: Router
  ) {
    addIcons({ logoIonic });
  }

  ngOnInit() {
    this.getMulan();
  }

  resetModal() {
    this.id = null;
    this.nama = '';
    this.story = '';
  }


  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  tambahMulan() {
    if (this.nama != '' && this.story != '') {
      let data = {
        nama: this.nama,
        story: this.story,
      };
      this.api.tambah(data, 'tambah.php').subscribe({
        next: (hasil: any) => {
          this.resetModal();
          console.log('berhasil tambah mulan');
          this.getMulan();
          this.modalTambah = false;
          this.modal.dismiss();
        },
        error: (err: any) => {
          console.error(err)
          console.log('gagal tambah mulan');
        },
      });
    } else {
      console.log('gagal tambah mulan karena masih ada data yg kosong');
    }
  }

  async konfirmasiHapus({
    id,
    nama,
    story,
  }: {
    id: number;
    nama: string;
    story: string;
  }) {
    const alert = await this.alert.create({
      header: 'Hapus',
      message: `Apakah anda yakin ingin menghapus data Mulan dengan nama ${nama} dari story ${story}?`,
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          handler: () => {},
        },
        {
          text: 'Hapus',
          role: 'confirm',
          handler: () => {
            this.hapusMulan(id);
            return;
          },
        },
      ],
    });

    await alert.present();
  }

  hapusMulan(id: any) {
    this.api.hapus(id, 'hapus.php?id=').subscribe({
      next: (res: any) => {
        console.log('sukses', res);
        this.getMulan();
        console.log('berhasil hapus data');
      },
      error: (error: any) => {
        console.log('gagal');
      },
    });

    return;
  }

  editMulan() {
    let data = {
      id: this.id,
      nama: this.nama,
      story: this.story,
    };
    this.api.edit(data, 'edit.php').subscribe({
      next: (hasil: any) => {
        console.log(hasil);
        this.resetModal();
        this.getMulan();
        console.log('berhasil edit Mulan');
        this.modalEdit = false;
        this.modal.dismiss();
      },
      error: (err: any) => {
        console.log('gagal edit Mulan');
      },
    });
  }

  ambilMulan(id: any) {
    this.api.lihat(id, 'lihat.php?id=').subscribe({
      next: (hasil: any) => {
        console.log('sukses', hasil);
        let mulan = hasil;
        this.id = mulan.id;
        this.nama = mulan.nama;
        this.story = mulan.story;
      },
      error: (error: any) => {
        console.log('gagal ambil data');
      },
    });
  }

  openModalTambah(isOpen: boolean) {
    this.modalTambah = isOpen;
    this.resetModal();
    this.modalTambah = true;
    this.modalEdit = false;
  }

  cancel() {
    this.modal.dismiss();
    this.modalTambah = false;
    this.modalEdit = false;
    this.resetModal();
  }

  getMulan() {
    this.api.tampil('tampil.php').subscribe({
      next: (res: any) => {
        console.log('sukses', res);
        this.dataMulan = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  openModalEdit(isOpen: boolean, idget: any) {
    this.modalEdit = isOpen;
    this.id = idget;
    console.log(this.id);
    this.ambilMulan(this.id);
    this.modalTambah = false;
    this.modalEdit = true;
  }
}
