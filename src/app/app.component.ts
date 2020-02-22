import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'property-binding-html-component';

  buttonStatus = false;
  paragraphContent ="this is paragraph content coming from a property";

  myStyle="red";

  constructor() {
    setTimeout(() =>{
      this.buttonStatus = true;
    }, 5000);
  }
}
