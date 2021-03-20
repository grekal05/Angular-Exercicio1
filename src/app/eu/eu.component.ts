import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {

  Nome: string = "Grevisse ";
  Idade: string = "32 anos";
  Gosto: string = " Assistir filmes; Documentario , tocar o violão, Amo Viajar e conhecer cultura";
  Pais: string = " Republica Democratica do Congo";
  UrlImagen: string = "./assets/grev.jpg";


  constructor() { }

  ngOnInit(): void {
  }

}
