import { Component, OnInit } from '@angular/core';
import { SeriesComponent } from '../series/series.component';
import { DataService } from '../data/DataService';
import { Series } from '../models/Series';
import { Book } from '../models/Book';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-series-page',
  standalone: true,
  imports: [SeriesComponent, NgFor],
  templateUrl: './series-page.component.html',
  styleUrl: './series-page.component.css',
  providers: [DataService]
})
export class SeriesPageComponent{
  constructor(private dataService: DataService) {

  }
  
  seriesList: Series[] = this.dataService.getSeriesList();
  booksList: Book[] = this.dataService.getBookList();
}
