import { Component, Input, OnInit } from '@angular/core';
import { Series } from '../models/Series';
import { Book } from '../models/Book';
import { NgFor } from '@angular/common';
import { BookComponent } from "../book/book.component";

@Component({
    selector: 'app-series',
    standalone: true,
    templateUrl: './series.component.html',
    styleUrl: './series.component.css',
    imports: [NgFor, BookComponent]
})
export class SeriesComponent implements OnInit{

  @Input() series: any;
  @Input() books: any;

  booksList: Book[] = [];
  authorHeader: string = '';
  
  ngOnInit(): void {
    if(this.series.Title == "Hell Divers") {
      for(let i = 0; i < this.books.length; i++) {
        if(this.books[i].PublisherId == 1) {
          this.booksList.push(this.books[i]);
        }
      }
      this.authorHeader = "Nicholas Sansbury Smith";
    }
    else if(this.series.Title == "Legend") {
      for(let i = 0; i < this.books.length; i++) {
        if(this.books[i].PublisherId == 2) {
          this.booksList.push(this.books[i]);
        }
      }
      this.authorHeader = "Marie Lu";
    }
    else if(this.series.Title == "BZRK") {
      for(let i = 0; i < this.books.length; i++) {
        if(this.books[i].PublisherId == 3) {
          this.booksList.push(this.books[i]);
        }
      }
      this.authorHeader = "Michael Grant";
    }
  }
}
