import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-firbasetodo',
  templateUrl: './firbasetodo.component.html',
  styleUrls: ['./firbasetodo.component.css']
})
export class FirbasetodoComponent implements OnInit {

  // constructor() { }
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';


  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {

    this.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
    });

    this.user = this.afAuth.authState;

  }

  login() {
    this.afAuth.auth.signInAnonymously();
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  Send(desc: string) {
    console.log(desc);
    this.items.push({ message: desc });
    this.msgVal = '';
  }

  ngOnInit() {
  }

}
