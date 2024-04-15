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

  //Inputs passed from library-page to display books in the passed in series
  @Input() series: any;
  @Input() books: any;

  //books list and checking will be updated with Data Service once dummy data established
  booksList: Book[] = [];
  authorHeader: string = '';

  seriesList: Series[] = this.dataService.getSeriesList();
  
  //Hard coded display data, will be updated when data is established
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

  //routes to author-page when an author is clicked
  authorClick(author: string) {
    let data = btoa(JSON.stringify(author));
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data
      }
    };
    this.router.navigate(["author-page"], navigationExtras);
  }

  //gets a series based on an author HARD-CODED
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
