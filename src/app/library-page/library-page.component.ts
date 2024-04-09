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
  templateUrl: './library-page.component.html',
  styleUrl: './library-page.component.css',
  providers: [DataService]
})
export class LibraryPageComponent{
  constructor(private dataService: DataService) {

  }
  
  seriesList: Series[] = this.dataService.getSeriesList();
  booksList: Book[] = this.dataService.getBookList();
}
