import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseAuthState } from 'angularfire2';

import { NavController } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { TodoPage } from "../todo/todo";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todos: FirebaseListObservable<any>;
  user: FirebaseAuthState;
logStatus: string;
  constructor(public navCtrl: NavController, public af: AngularFire) {
    this.todos = af.database.list('todos');
    af.auth.subscribe(user => {
        this.user=user;
        if (user) {
            this.logStatus = `You are logged in as ${user.auth.email}`;
        } else {
            this.logStatus = "You are not logged in";
       }
    });
  }

  login() {
    console.log("login called");
    this.navCtrl.push(LoginPage);
  }

  goToCreate() {
    if (this.user) {
this.navCtrl.push(TodoPage);
    } else {
        this.navCtrl.push(LoginPage);
    }
}

goToModify(todo) {
    if (this.user) {
        this.navCtrl.push(TodoPage, { todo: todo });
    } else {
        this.navCtrl.push(LoginPage);
    }
}

delete(todoId) {
    if (this.user) {
        this.todos.remove(todoId);
    } else {
        this.navCtrl.push(LoginPage);
    }
}

signout() {
    this.af.auth.logout();
}

}
