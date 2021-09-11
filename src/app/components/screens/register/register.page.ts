import { AuthService } from './../../../services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../auth.model';
import { LoadingController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @Input() auth: Auth;
  form: FormGroup;
  postData = {
    username: '',
    email: '',
    password: ''
    };
  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
}
  initRegisterForm(){
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }
  closeModal(data = null){
    this.modalCtrl.dismiss(data);
  }
  async submitRegister(){
    const loading = await this.loadingCtrl.create({message: 'Loading...'});
    loading.present();
  }
  logForm(){
    console.log(this.auth);
  }
}
