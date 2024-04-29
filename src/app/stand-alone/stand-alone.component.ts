import { Component, Input, OnInit } from '@angular/core';
import { BookComponent } from '../book/book.component';
import { NgFor } from '@angular/common';
import { NavigationExtras } from '@angular/router';
import { Author } from '../models/Author';
import { Router } from '@angular/router';
import { DataService } from '../data/DataService';
import { Book } from '../models/Book';

@Component({
    selector: 'app-stand-alone',
    standalone: true,
    templateUrl: './stand-alone.component.html',
    styleUrl: './stand-alone.component.css',
    imports: [BookComponent, NgFor]
})
export class StandAloneComponent implements OnInit{
  //Initializes router and data service for data passing
  constructor(private router: Router, private dataService: DataService){}

  //variables to hold stand alone info
  @Input() standAloneAuthor: any;
  @Input() standAloneBooksList:any;

  booksList: Book[] = [];

  //initializes global variables
  ngOnInit(): void {
    for(let i = 0; i < this.standAloneBooksList.length; i++) {
      if(this.dataService.getBookAuthor(this.standAloneBooksList[i]) == this.standAloneAuthor) {
        this.booksList.push(this.standAloneBooksList[i]);
      }
    }
  }

  //routes to author-page when an author is clicked
  authorClick(author: Author) {
    let data = btoa(JSON.stringify(author));
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data
      }
    };
    this.router.navigate(["author-page"], navigationExtras);
  }
}
