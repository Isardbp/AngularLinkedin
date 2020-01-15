import { Component, OnInit } from '@angular/core';
import { notices } from '../notices'
@Component({
  selector: 'app-inici',
  templateUrl: './inici.component.html',
  styleUrls: ['./inici.component.scss']
})
export class IniciComponent implements OnInit {
  notices = notices;
  constructor() { 
    console.log(this.notices)
  }

  ngOnInit() {
  }

}
