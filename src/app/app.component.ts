import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName = 'G.M.R';
  userData = {
    email: 'Eu@gmail.com',
    role: 'Admin',
  };

  title = 'angular-curso';
}
