import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'
import { empreses } from '../empreses'
@Component({
  selector: 'app-expirience-empresa',
  templateUrl: './expirience-empresa.component.html',
  styleUrls: ['./expirience-empresa.component.scss']
})
export class ExpirienceEmpresaComponent implements OnInit {
  @Input() experiencia;
  empresa;

  empreses = empreses;

  constructor() { }

  ngOnInit() {
    for(let i = 0; i<this.empreses.length;i++){
      if(this.experiencia.id == this.empreses[i].id){
        this.empresa = this.empreses[i]
      }
    }
  }

}
