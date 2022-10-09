import {Component, Input, OnInit} from '@angular/core';
import { Button } from './Buttons';
import {MainPageState, StateSetter} from "../app.component";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  title = 'Boris Design';
  selectedId = "House masters"
  Buttons: Button[] = [
    {text: 'House masters'},
    {text: 'Fridge'},
    {text: 'Premium'},
    {text: 'Rooms'},
  ];

  @Input()
  state!: MainPageState;

  @Input()
  stateSetter!: StateSetter;

  constructor() { }

  ngOnInit(): void {
  }

  change(id: string): void {
    this.selectedId = id;
    switch (id) {
      case 'House masters':
        this.state = "houseMaster";
        break;
      case 'Fridge':
        this.state = "fridge";
        break;
      case 'Premium':
        this.state = "premiums";
        break;
      case 'Rooms':
        this.state = "rooms";
    }
    this.stateSetter.setState(this.state);
  }
}
