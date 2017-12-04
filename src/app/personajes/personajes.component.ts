import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.less']
})
export class PersonajesComponent implements OnInit {
  charactersObservable: Observable<any[]>;

  listado: object[];
  Arr = Array;

  constructor(private db: AngularFireDatabase) {
    this.charactersObservable = this.getCharacters('/characters');
  }

  ngOnInit() {
  }

  getCharacters(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

}
