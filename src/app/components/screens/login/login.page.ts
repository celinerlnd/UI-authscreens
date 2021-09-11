import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  postData = {
    username: '',
    password: ''
    };
  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private toastService: ToastService,
  ) { }

  validateInputs() {
    console.log(this.postData);
    const username = this.postData.username.trim();
    const password = this.postData.password.trim();
    return (
    this.postData.username &&
    this.postData.password &&
    username.length > 0 &&
    password.length > 0
    );
    }

    async submitSignIn(){
      const loading = await this.loadingCtrl.create({message: 'Loading...'});
      loading.present();

  //     let response: Observable<Auth>;
  //     response = this.sharedService.Register(this.form.value);
  //     if(this.validateInputs()){
  //       this.sharedService.Register(this.postData).subscribe((response)=>{
  //         console.log(response);
  //       });
  //       this.toastService.presentToast('You are not registered yet');
  //     } else{
  //       this.toastService.presentToast('Incorrect Username and Password');
  //   }
  }

}
