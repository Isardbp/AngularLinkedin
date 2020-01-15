import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'
import  { users } from '../users'
@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {
  @Input() notice;
  user;
  users = users;
  constructor() {
    
  }

  ngOnInit() {
    for(let i = 0;i<this.users.length;i++){
      if(this.users[i].id == this.notice.userId){
        this.user = this.users[i]
      }
    }
  }

}
