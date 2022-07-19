import { Component, OnInit } from '@angular/core';
import VALUES from './values.json';
import JSON from './JSON.json';


@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.css']
})
export class Ejercicio2Component implements OnInit {
  values: any = VALUES
  json: any = JSON

  resultado: any = {}
  hola = { hola: "sdasd" }
  constructor() { }

  ngOnInit(): void {
    const keys = Object.keys(this.json.data);
    keys.forEach(k => {
      let maxObj = this.json['data'][k].reduce((max: any, obj: any) => max.limit > obj.limit ? max : obj);
      this.resultado[k] = {
        limit: maxObj.limit,
        over: this.values[maxObj.over_carrier_service_id],
        under: this.values[maxObj.under_carrier_service_id]
      }
    })
  }

}
