import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./createCharacter.less']
})
export class CreateCharacterComponent implements OnInit {
  itemRef: AngularFireList<any[]>;

  constructor(private db: AngularFireDatabase) {

  }

  ngOnInit() {
    this.itemRef = this.db.list('/characters');
  }


  onSubmit(f: NgForm) {
    console.log(f.value)
    this.itemRef.push(f.value)
      .then(_ => f.resetForm()
      )


  }

}
