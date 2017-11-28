import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.less']
})
export class PersonajesComponent implements OnInit {
  listado: object[];
  Arr = Array;

  constructor() {
    this.listado = [{
      basica: {
        jugador: "Junior",
        concepto: "",
        personaje: "Von Caster",
        nacion: "Eisen",
        religion: "Objetivista",
        reputacion: 0,
        riqueza: 0,
      },
      historia: "Cazador de Mounstruos profesional, al servicio de un principe del Hierro. Superviviente  de la Guerra de la Cruz",
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
        jugador: "Junior",
        concepto: "",
        personaje: "Von Caster",
        nacion: "Eisen",
        religion: "Objetivista",
        reputacion: 0,
        riqueza: 0,
      },
      historia: "Cazador de Mounstruos profesional, al servicio de un principe del Hierro. Superviviente  de la Guerra de la Cruz",
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
        jugador: "Junior",
        concepto: "",
        personaje: "Von Caster",
        nacion: "Eisen",
        religion: "Objetivista",
        reputacion: 0,
        riqueza: 0,
      },
      historia: "Cazador de Mounstruos profesional, al servicio de un principe del Hierro. Superviviente  de la Guerra de la Cruz",
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
