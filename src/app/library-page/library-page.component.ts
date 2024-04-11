import { Component, OnInit } from '@angular/core';
import { SeriesComponent } from '../series/series.component';
import { DataService } from '../data/DataService';
import { Series } from '../models/Series';
import { Book } from '../models/Book';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-series-page',
  standalone: true,
  imports: [SeriesComponent, NgFor, NgIf],
  templateUrl: './library-page.component.html',
  styleUrl: './library-page.component.css',
  providers: [DataService]
})
export class LibraryPageComponent implements OnInit{
  constructor(public dataService: DataService) {

  }
  
  seriesList: Series[] = this.dataService.getSeriesList();
  booksList: Book[] = this.dataService.getBookList();
  authorList: string[] =[];
  filteredAuthorList: string[] = [];
  filterActive: boolean = false;

  ngOnInit(): void {
    var temp: string[] = [];
    for(let i = 0; i < this.booksList.length; i++) {
      if(!temp.includes(this.booksList[i].Author)) {
        temp.push(this.booksList[i].Author);
      }
    }
    this.authorList = temp;
  }

 filterAuthors(author:string) {
  this.filterActive = true;
    if(!this.filteredAuthorList.includes(author)) {
      this.filteredAuthorList.push(author);
    }
    else {
      var index = this.filteredAuthorList.indexOf(author);
      delete this.filteredAuthorList[index];
    }
 }

}
