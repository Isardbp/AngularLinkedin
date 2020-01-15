import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'

@Component({
  selector: 'app-empresa-component',
  templateUrl: './empresa-component.component.html',
  styleUrls: ['./empresa-component.component.scss']
})
export class EmpresaComponentComponent implements OnInit {
  @Input() empresa;

  constructor() { }

  ngOnInit() {
  }

}
