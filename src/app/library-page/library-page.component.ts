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
  activeFilters: (Author | Genre | Publisher)[] = [];
  filterTypeCount: number[] = [0,0,0];

  //filters series and standalones
  //FILTERS ONLY BY GROUP, NO CROSS FILTERING YET
  applyFilters(selection:any) {
    this.checkFilterActive();
    
    let saBooks: Book[] = [];
    let series: Series[] = [];
    if(selection instanceof Author) {
      saBooks = this.dataService.getBooksByAuthor(selection);
      series = this.dataService.getSeriesByAuthor(selection);
    }
    else if(selection instanceof Genre) {
      saBooks = this.dataService.getBooksByGenre(selection);
      series = this.dataService.getSeriesByGenre(selection);
    }
    else if(selection instanceof Publisher) {
      saBooks = this.dataService.getBooksByPublisher(selection);
      series = this.dataService.getSeriesByPublisher(selection);
    }

    this.updateActiveFilters(selection, series);
    this.updateFilteredStandAloneList(saBooks);
  }

  //updates list of active filters
  updateActiveFilters(filter: Author | Genre | Publisher, series: Series[]) {
    if(!this.activeFilters.includes(filter)) {
      this.activeFilters.push(filter);
      if(filter instanceof Author) {this.filterTypeCount[0]++}
      else if(filter instanceof Genre) {this.filterTypeCount[1]++}
      else if(filter instanceof Publisher) {this.filterTypeCount[2]++}
      this.updateFilteredSeries(series);
    }
    else {
      var index = this.activeFilters.indexOf(filter);
      this.activeFilters.splice(index, 1);
      if(filter instanceof Author) {this.filterTypeCount[0]--}
      else if(filter instanceof Genre) {this.filterTypeCount[1]--}
      else if(filter instanceof Publisher) {this.filterTypeCount[2]--}
      this.updateFilteredSeries(series);
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

  //updates filtered series list
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


  /*******************COMBINATION FILTER METHOD *******************************/
  //NEEDS TO CORRECTLY UPDATE CURRENT FILTERED SERIES LIST
  updateFilteredSeries(series: Series[]) {
    let filters = this.filterTypeCount;
    let filteredSeries: Series[] = [];
    var currentAuthor, currentGenres, currentPublisher;

    if(filters[0] >= 1 && filters[1] == 0 && filters[2] == 0) {
      //author
      this.updateFilteredSeriesList(series);
    }
    else if(filters[0] == 0 && filters[1] >= 1 && filters[2] == 0) {
      //genre
      this.updateFilteredSeriesList(series);
    }
    else if(filters[0] == 0 && filters[1] == 0 && filters[2] >= 1) {
      //pub
      this.updateFilteredSeriesList(series);
    }
    else if(filters[0] >= 1 && filters[1] >= 1 && filters[2] == 0) {
      //author, genre
      for(let i = 0; i < series.length; i++) {
        currentAuthor = this.dataService.getAuthorBySeries(series[i]);
        currentGenres = this.dataService.getGenresBySeries(series[i]);
        for(let j = 0; j < currentGenres.length; j++) {
          if(this.activeFilters.includes(currentGenres[j]) && this.activeFilters.includes(currentAuthor)) {
            filteredSeries.push(series[i]);
          }
        }
      }
    }
    else if(filters[0] >= 1 && filters[1] == 0 && filters[2] >= 1) {
      //author, pub
      for(let i = 0; i < series.length; i++) {
        currentAuthor = this.dataService.getAuthorBySeries(series[i]);
        currentPublisher = this.dataService.getPublisherBySeries(series[i]);
        if(this.activeFilters.includes(currentAuthor) && this.activeFilters.includes(currentPublisher)) {
          filteredSeries.push(series[i]);
          break;
        }
      }
    } 
    else if(filters[0] == 0 && filters[1] >= 1 && filters[2] >= 1) {
      //genre, pub
      for(let i = 0; i < series.length; i++) {
        currentPublisher = this.dataService.getPublisherBySeries(series[i]);
        currentGenres = this.dataService.getGenresBySeries(series[i]);
        for(let j = 0; j < currentGenres.length; j++) {
          if(this.activeFilters.includes(currentGenres[j]) && this.activeFilters.includes(currentPublisher)) {
            filteredSeries.push(series[i]);
            break;
          }
        }
      }
    }
    else if(filters[0] >= 1 && filters[1] >= 1 && filters[2] >= 1) {
      //all
      for(let i = 0; i < series.length; i++) {
        currentAuthor = this.dataService.getAuthorBySeries(series[i]);
        currentGenres = this.dataService.getGenresBySeries(series[i]);
        currentPublisher = this.dataService.getPublisherBySeries(series[i]);
        for(let j = 0; j < currentGenres.length; j++) {
          if(this.activeFilters.includes(currentGenres[j]) && this.activeFilters.includes(currentAuthor) && this.activeFilters.includes(currentPublisher)) {
            filteredSeries.push(series[i]);
            break;
          }
        }
      }
    }
  }

  sendAlerts(series: Series[]) {
    for(let i = 0; i < series.length; i++) {
      alert(series[i].Title);
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
