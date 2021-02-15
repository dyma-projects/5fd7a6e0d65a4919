import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public ex1works: string = "exercice1 works !";
  public classEx1: string = "ex1";
  public nom: string;

  constructor() {
    this.nom = "";
  }

  ngOnInit(): void {}
}
