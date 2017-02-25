import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the Todo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html'
})
export class TodoPage {
  description: string;
  owner: string;
  status: string;
  todos: FirebaseListObservable<any>;
  todo:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {
        if (this.navParams.data.todo) {
         
        this.todo = this.navParams.data.todo;
        this.description = this.todo.description;
        this.owner = this.todo.owner;
        this.status = this.todo.status;
    };
    this.todos = af.database.list('todos');
    this.todos = this.af.database.list('todos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoPage');
  }

  createTodo() {
    this.todos.push({
      description: this.description,
      owner: this.owner,
      status: this.status
    }).then(_ => this.navCtrl.pop());
  }

}
