import { Component, Input, OnInit } from '@angular/core';
import { Series } from '../models/Series';
import { Book } from '../models/Book';
import { NgFor } from '@angular/common';
import { BookComponent } from "../book/book.component";
import { Router, RouterLink, RouterLinkActive, NavigationExtras } from '@angular/router';
import { DataService } from '../data/DataService';

@Component({
    selector: 'app-series',
    standalone: true,
    templateUrl: './series.component.html',
    styleUrl: './series.component.css',
    imports: [NgFor, BookComponent, RouterLink, RouterLinkActive], 
    providers: [DataService]
})
export class SeriesComponent implements OnInit{

  constructor(private router: Router, private dataService: DataService) {

  }

  @Input() series: any;
  @Input() books: any;

  //books list and checking will be updated with Data Service once dummy data established
  booksList: Book[] = [];
  authorHeader: string = '';

  seriesList: Series[] = this.dataService.getSeriesList();
  
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

  //navigates to book-page and passes the selected book
  authorClick(author: string): void {
    let passSeries: Series = this.getSeriesByAuthor(author);
    let data = btoa(JSON.stringify(passSeries));
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data
      }
    };
    this.router.navigate(["book-page"], navigationExtras);
  }

  getSeriesByAuthor(author: string): Series {
    var title = '';
    if(author == "Nicholas Sansbury Smith") {
      title = "Hell Divers";
    }
    else if(author == "Marie Lu") {
      title = "Legend";
    }
    else if(author == "Michael Grant") {
      title = "BZRK";
    }
    return this.getSeriesByTitle(title);
  }

  //gets title of series based on author
  getSeriesByTitle(title: string): Series {
    let series: Series = this.seriesList[0];
    for(let i = 0; i < this.seriesList.length; i++) {
      if(this.seriesList[i].Title == title) {
        series = this.seriesList[i];
      }
    }
    return series;
  }
}
