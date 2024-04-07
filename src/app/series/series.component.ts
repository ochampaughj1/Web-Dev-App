import { Component } from '@angular/core';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {
  constructor(){}
  authorHeader = "Best Selling Author: Nicholas Sansbury's";
  title = "Hell Divers";

  hellDivers="./assets/images/helldivers1.jpg"
}
