import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { empreses } from '../empreses'

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {
  id = null;
  empreses = empreses
  
  empresa;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    for(let i = 0;i<this.empreses.length;i++){
      if(this.empreses[i].id == this.id){
        this.empresa = this.empreses[i]
      } 
    }
  }

}
