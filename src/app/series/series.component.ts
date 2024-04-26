import { Component, Input, OnInit } from '@angular/core';
import { Series } from '../models/Series';
import { Book } from '../models/Book';
import { NgFor , NgIf} from '@angular/common';
import { BookComponent } from "../book/book.component";
import { Router, RouterLink, RouterLinkActive, NavigationExtras } from '@angular/router';
import { DataService } from '../data/DataService';
import { Author } from '../models/Author';

@Component({
    selector: 'app-series',
    standalone: true,
    templateUrl: './series.component.html',
    styleUrl: './series.component.css',
    imports: [NgFor, NgIf, BookComponent, RouterLink, RouterLinkActive], 
    providers: [DataService]
})
export class SeriesComponent implements OnInit{

  //initializes router and data services for data passing 
  constructor(private router: Router, private dataService: DataService) {  }

  //Input passed from library-page to display books in the passed in series
  @Input() series: any;
  //display variables for page types
  @Input() displayType: any;
  type = 'authorPage';

  //variables to hold passed data
  booksList: Book[] = [];
  seriesList: Series[] = this.dataService.getSeriesList();
  author: any;
  
  //sets booklist and author
  ngOnInit(): void {
    this.booksList = this.dataService.getBooksBySeries(this.series);
    this.author = this.dataService.getAuthorBySeries(this.series);
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
