import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  standalone: false,
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
title: string = 'Hello from navigation bar!'; /* testing over, ion need this no mo */
}
