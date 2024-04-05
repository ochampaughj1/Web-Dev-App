import { Component, Input } from '@angular/core';
import { SeriesComponent } from '../series/series.component';

@Component({
  selector: 'app-series-page',
  standalone: true,
  imports: [SeriesComponent],
  templateUrl: './series-page.component.html',
  styleUrl: './series-page.component.css'
})
export class SeriesPageComponent {
  
}
