import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'property-binding-html-component';

  website = {
    buttonStatus: false,
    paragraphContent: "this is paragraph content coming from a property",
    paraStyle: "red",
    imageUrl: "assets/target_1.png",
  }

  constructor() {
    setTimeout(() => {
      this.website.buttonStatus = true;
    }, 5000);
  }
}
