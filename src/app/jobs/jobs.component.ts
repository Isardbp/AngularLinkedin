import { Component, OnInit } from '@angular/core';
import { empreses } from '../empreses'

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  empreses = empreses;
  constructor() { }

  ngOnInit() {
  }

}
