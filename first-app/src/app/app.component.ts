import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';

  constructor(){
    /* setTimeout(() => {
      this.title = 'My Brand New App '
    }, 10000); */
  }

  onChangeTitleClick(){
    this.title = 'My Brand New App' 
  }
}

/* 
Component => Presentation + UI Behavior + UI State
*/