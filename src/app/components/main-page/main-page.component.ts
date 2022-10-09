import {Component, Input, OnInit} from '@angular/core';
import {MainPageState} from "../app.component";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  @Input()
  state!: MainPageState;

  constructor() { }

  ngOnInit(): void { }
}
