import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TodoPage } from '../pages/todo/todo';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

const firebaseConfig = {
  apiKey: "AIzaSyAakZeaPaJAtGYwzvHXtjx7SOEfwHKmUK4",
  authDomain: "todo-ionic2-3a3b9.firebaseapp.com",
  databaseURL: "https://todo-ionic2-3a3b9.firebaseio.com",
  storageBucket: "todo-ionic2-3a3b9.appspot.com",
  messagingSenderId: "1086862585427"
};
const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};
@NgModule({
  declarations: [MyApp, HomePage, SignupPage, LoginPage, TodoPage],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, SignupPage, LoginPage, TodoPage],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule { }
