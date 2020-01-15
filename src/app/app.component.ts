import { Component } from '@angular/core';
import {users} from './users'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pagina-test';
  users = users;
}
