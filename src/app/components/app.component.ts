import { Component } from '@angular/core';

export type MainPageState = 'houseMaster' | 'fridge' | 'premiums' | 'rooms';

export abstract class StateSetter {
  abstract setState(state: MainPageState): void;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements StateSetter {
  title = 'Boarding';

  state: MainPageState = 'houseMaster';
  thisInstance = this;

  setState(state: MainPageState): void {
    this.state = state;
  }
}
