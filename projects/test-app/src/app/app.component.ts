import { Component } from '@angular/core';
import { TestLibrary } from 'test-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TestLibrary
  ],
  templateUrl: './app.component.html',
  styles: [`
    :host {
      border: 1px solid red;
      display: block;
    }

    span {
      padding: 3px;
      background-color: #ddd;
    }
  `]
})
export class AppComponent {
}
