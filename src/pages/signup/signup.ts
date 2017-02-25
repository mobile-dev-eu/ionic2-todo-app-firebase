import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
import { HomePage } from '../home/home';

/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  email: string;
  password: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, private af: AngularFire) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  signup() {
    this.af.auth.createUser({
      email: this.email,
      password: this.password
    }).then(_ => {
      this.navCtrl.setRoot(HomePage);
    });
  }


}
