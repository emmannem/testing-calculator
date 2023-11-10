import { Component, OnInit } from "@angular/core";
import { addition } from "../addition/addition";
import { factorialIterativo } from "../factorial/factorial";
import { logaritmoNatural } from "../logaritmo/logaritmo";
import { logaritmoBase10 } from "../logaitmoBase/logaritmobase";
import { calcularPorcentaje } from "../porcentaje/porcentaje";
import { calcularRaiz } from "../raiz/raiz";

@Component({
  selector: "app-ui",
  templateUrl: "./ui.component.html",
  styleUrls: ["./ui.component.css"],
})
export class UiComponent implements OnInit {
  constructor() {}

  resultado = 0;
  operando1 = 0;
  operando2 = 0;

  ngOnInit() {}

  calcularFactorial() {
    let myresult = 0;
    myresult = factorialIterativo(this.operando1);
    this.resultado = myresult;
  }

  calcularLogaritmoNatural() {
    let myresult = 0;
    myresult = logaritmoNatural(this.operando1);
    this.resultado = myresult;
  }

  calcularLogaritmoBase10() {
    let myresult = 0;
    myresult = logaritmoBase10(this.operando1);
    this.resultado = myresult;
  }

  calcularPorcentaje() {
    let myresult = 0;
    myresult = calcularPorcentaje(this.operando1, this.operando2);
    this.resultado = myresult;
  }

  calcularRaiz() {
    let myresult = 0;
    myresult = calcularRaiz(this.operando1, this.operando2);
    this.resultado = myresult;
  }
}
