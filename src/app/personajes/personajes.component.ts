import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.less']
})
export class PersonajesComponent implements OnInit {
  listado: object[];

  constructor() {
    this.listado = [{
      basica: {
        Jugador: "Junior",
        Concepto: "",
        Personaje: "Von Caster",
        Nacion: "Eisen",
        Religion: "Objetivista",
        Reputacion: 0
      },
      caracteristicas: {
        musculo: 4,
        manya: 3,
        brio: 2,
        ingenio: 2,
        donaire: 3
      },
      habilidades: {
        armas: 3,
        atletismo: 2,
        equitacion: 2,
        intimidar: 2,
        pelear: 3,
        percepcion: 2
      }

    }, {
      basica: {
        Jugador: "Junior",
        Concepto: "",
        Personaje: "Van Caster",
        Nacion: "Eisen",
        Religion: "Objetivista",
        Reputacion: 0
      },
      caracteristicas: {
        musculo: 4,
        manya: 3,
        brio: 2,
        ingenio: 2,
        donaire: 3
      },
      habilidades: {
        armas: 3,
        atletismo: 2,
        equitacion: 2,
        intimidar: 2,
        pelear: 3,
        percepcion: 2
      }

    }, {
      basica: {
        Jugador: "Junior",
        Concepto: "",
        Personaje: "Van Caster",
        Nacion: "Eisen",
        Religion: "Objetivista",
        Reputacion: 0
      },
      caracteristicas: {
        musculo: 4,
        manya: 3,
        brio: 2,
        ingenio: 2,
        donaire: 3
      },
      habilidades: {
        armas: 3,
        atletismo: 2,
        equitacion: 2,
        intimidar: 2,
        pelear: 3,
        percepcion: 2
      }

    }]

  }

  ngOnInit() {
  }

}
