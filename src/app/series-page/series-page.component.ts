import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from '../models/Author';

@Component({
  selector: 'app-series-page',
  standalone: true,
  imports: [],
  templateUrl: './series-page.component.html',
  styleUrl: './series-page.component.css'
})
export class SeriesPageComponent implements OnInit{
  constructor(private route: ActivatedRoute){}

  author: any;
  series: any;

  //gets author data from router link
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        let authorData = JSON.parse(atob(params['authorData']));
        let seriesData = JSON.parse(atob(params['seriesData']));
        this.author = authorData;
        this.series = seriesData;
      });
  }
}
