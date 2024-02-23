import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TestLibrary } from 'test-lib';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    TestLibrary    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  today = new Date();
}
