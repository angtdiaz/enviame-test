import { Component, OnInit } from '@angular/core';
import { isPrime } from 'mathjs';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component implements OnInit {
  vinicial = "";
  vfinal = "";
  result: number[] = []
  resultado = ""



  constructor() { }

  ngOnInit(): void {
  }
  calcularPrimos() {
    const inicial = parseInt(this.vinicial)
    const final = parseInt(this.vfinal)
    this.result = []
    console.log(this.vinicial)
    if (inicial > final) Swal.fire("Error", "Por favor, ingrese un numero inicial menor al final.", "error");
    for (let i = inicial; i <= final; i++) {
      if (isPrime(i)) this.result.push(i)
    }
    this.resultado = this.result.toString()

  }

}
