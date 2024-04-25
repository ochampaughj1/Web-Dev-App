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
  constructor(private router: Router, private dataService: DataService){}

  @Input() standAloneAuthor: any;
  standAloneBooksList: Book[] = [];

  ngOnInit(): void {
    var books = this.dataService.getStandAloneBooks();
    for(let i = 0; i < books.length; i++) {
      if(this.dataService.getBookAuthor(books[i]) == this.standAloneAuthor) {
        this.standAloneBooksList.push(books[i]);
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
