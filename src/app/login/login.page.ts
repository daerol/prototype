import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController} from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = "";

  constructor(private router: Router, public toastController: ToastController) {}

  ngOnInit() {}


  login() {

    const { username } = this


    // Try and catch if there's an error with the username
      try {

          // check if username === to the desired name
        if(username === "tom") {
          this.router.navigate(['verification']);
        } else if (username === "") {
            this.usernameEmpty();
        } else {
          this.usernameDoesNotExist();
        }
      } catch (err) {
        console.dir(err);
      }

  }


  async usernameDoesNotExist() {
    const toast = await this.toastController.create({
      message: 'Username does not exist!',
      showCloseButton: true,
      position: 'top',
      color: 'danger',
      keyboardClose: true,
      closeButtonText: 'Done'
    });
    toast.present();
  }


  async usernameEmpty() {
    const toast = await this.toastController.create({
      message: 'Please enter in username!',
      position: 'top',
      color: 'medium',
      duration: 2000,
    });
    toast.present();
  }


}
