import { Component } from '@angular/core';

@Component({
  selector: 'app-main-component',
  standalone: false,
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.css'
})
export class MainComponentComponent {
  title: string = "Test main field";
}
