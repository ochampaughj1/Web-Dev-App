import { Component, OnInit } from '@angular/core';
import { SeriesComponent } from '../series/series.component';
import { DataService } from '../data/DataService';
import { Series } from '../models/Series';
import { Book } from '../models/Book';
import { NgFor, NgIf } from '@angular/common';
import { Author } from '../models/Author';

@Component({
  selector: 'app-series-page',
  standalone: true,
  imports: [SeriesComponent, NgFor, NgIf],
  templateUrl: './library-page.component.html',
  styleUrl: './library-page.component.css',
  providers: [DataService]
})
export class LibraryPageComponent implements OnInit{
  constructor(private dataService: DataService) {

  }
  
  //master lists for books, authors, and series
  seriesList: Series[] = this.dataService.getSeriesList();
  booksList: Book[] = this.dataService.getBookList();
  authorList: Author[] = this.dataService.getAuthorsList();

  //filter items lists for updating page
  filteredSeriesList: Series[] = [];
  filterActive: boolean = false;

  //creates a list of authors from books list
  ngOnInit(): void {
    
  }

  //filters series list by author filters selected
  //FILTER DOESNT WORK FOR STANDALONES!!!
  filterbyAuthors(author:Author) {
    window.scroll(0,0);
    this.checkFilterActive();
    var seriesByAuthor = this.dataService.getSeriesByAuthor(author);
    this.updateFilteredSeriesList(seriesByAuthor);
  }

  //checks if any checkboxes are checked
  checkFilterActive() {
    if(document.querySelectorAll("input:checked").length > 0) {
      this.filterActive = true;
    }
    else {
      this.filterActive = false;
    }
  }

  //updates series list off filters
  updateFilteredSeriesList(series: Series[]) { 
    for(let i = 0; i < series.length; i++) {
      if(!this.filteredSeriesList.includes(series[i])) {
        this.filteredSeriesList.push(series[i]);
      }
      else {
        var index = this.filteredSeriesList.indexOf(series[i]);
        this.filteredSeriesList.splice(index, 1); 
      }
    }
  }
}
