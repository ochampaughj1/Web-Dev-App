import { Component, OnInit } from '@angular/core';
import { SeriesComponent } from '../series/series.component';
import { DataService } from '../data/DataService';
import { Series } from '../models/Series';
import { Book } from '../models/Book';
import { NgFor, NgIf } from '@angular/common';
import { Author } from '../models/Author';
import { Genre } from '../models/Genre';
import { Publisher } from '../models/Publisher';
import { StandAloneComponent } from '../stand-alone/stand-alone.component';

@Component({
  selector: 'app-series-page',
  standalone: true,
  imports: [StandAloneComponent, SeriesComponent, NgFor, NgIf],
  templateUrl: './library-page.component.html',
  styleUrl: './library-page.component.css',
  providers: [DataService]
})
export class LibraryPageComponent {
  //initializes data service to get data
  constructor(private dataService: DataService) {}


  /* NEED TO IMPLEMENT SORT METHOD AND STANDALONE BOOK PASSING
     ALSO NEED TO IMPLEMENT STAND ALONE FILTERS */

  //master lists for books, authors, series, and stand alones from data service
  seriesList: Series[] = this.dataService.getSeriesList();
  booksList: Book[] = this.dataService.getBookList();
  authorList: Author[] = this.dataService.getAuthorsList();
  genreList: Genre[] = this.dataService.getGenreList();
  publisherList: Publisher[] = this.dataService.getPublisherList();
  standAloneBooks: Book[] = this.dataService.getStandAloneBooks();
  standAloneBookAuthors: Author[] = this.dataService.getStandAloneBookAuthors(this.standAloneBooks);

  //filter items lists for updating page
  filteredSeriesList: Series[] = [];
  filteredStandAloneList: Book[] = [];
  filteredAuthorList: Author[] = [];
  filterActive: boolean = false;

  //filters series
  //FILTER DOESNT WORK FOR STANDALONES!!!
  filterSeries(selection:any) {
    this.checkFilterActive();

    var seriesResult, standAloneResult;
    if(this.authorList.includes(selection)) {
      standAloneResult = this.dataService.getBooksByAuthor(selection);
      this.updateFilteredStandAloneList(standAloneResult);
      seriesResult = this.dataService.getSeriesByAuthor(selection);
      this.updateFilteredSeriesList(seriesResult);
    }
    else if(this.genreList.includes(selection)) {
      seriesResult = this.dataService.getSeriesByGenre(selection);
      this.updateFilteredSeriesList(seriesResult);
    }
    else if(this.publisherList.includes(selection)) {
      seriesResult = this.dataService.getSeriesByPublisher(selection);
      this.updateFilteredSeriesList(seriesResult);
    }
  }

  //checks if any filter checkboxes are checked
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

  //update stand alones off filters
  updateFilteredStandAloneList(books: Book[]) {
    for(let i = 0; i < books.length; i++) {
      if(books[i].StandAlone == true) {
        if(!this.filteredStandAloneList.includes(books[i])) {
          this.filteredStandAloneList.push(books[i]);
          if(!this.filteredAuthorList.includes(this.dataService.getBookAuthor(books[i]))) {
            this.filteredAuthorList.push(this.dataService.getBookAuthor(books[i]));
          }
        }
        else {
          var index = this.filteredStandAloneList.indexOf(books[i]);
          this.filteredStandAloneList.splice(index, 1);
          if(this.filteredAuthorList.includes(this.dataService.getBookAuthor(books[i]))) {
            var authorIndex = this.filteredAuthorList.indexOf(this.dataService.getBookAuthor(books[i]));
            this.filteredAuthorList.splice(authorIndex, 1);
          } 
        }
      }
    }
  }
}
