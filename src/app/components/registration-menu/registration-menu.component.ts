import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-menu',
  templateUrl: './registration-menu.component.html',
  styleUrls: ['./registration-menu.component.css']
})
export class RegistrationMenuComponent implements OnInit {
  isInvalid: boolean = false;
  username: string = "";
  password: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  handleLogin(): void {
    if (this.username == "" || this.password == "")
      this.isInvalid = true;
    else {
      this.isInvalid = false;
      console.log(this.username + " - " + this.password)
    }
  }

}
