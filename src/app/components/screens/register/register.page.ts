import { AuthService } from './../../../services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../auth.model';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ToastService } from 'src/app/services/toast.service';

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
  sharedService: any;
  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private toastService: ToastService,
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

    let response: Observable<Auth>;
    response = this.sharedService.Register(this.form.value);
    if(this.validateInputs()){
      this.sharedService.Register(this.postData).subscribe((response)=>{
        console.log(response);
      });
      this.toastService.presentToast('You are now registered.');
    } else{
      this.toastService.presentToast('Data already exists');
  }
}
}
