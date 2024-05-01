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
  activeGenres: Genre[] = [];
  filterTypeCount: number[] = [0,0,0];

  //filters series and standalones
  applyFilters(selection: Author | Genre | Publisher) {
    this.checkFilterActive();

    if(!this.activeFilters.includes(selection)) {
      this.activeFilters.push(selection);
      if(selection instanceof Author) { this.filterTypeCount[0]++; }
      else if(selection instanceof Publisher) { this.filterTypeCount[2]++; }
      else if(selection instanceof Genre) {
        this.filterTypeCount[1]++; 
        this.activeGenres.push(selection);
      }
    }
    else {
      var index = this.activeFilters.indexOf(selection);
      this.activeFilters.splice(index, 1);
      if(selection instanceof Author) { this.filterTypeCount[0]--; }
      else if(selection instanceof Publisher) { this.filterTypeCount[2]--; }
      else if(selection instanceof Genre) {
        this.filterTypeCount[1]--;
        var genreIndex = this.activeGenres.indexOf(selection);
        this.activeGenres.splice(genreIndex, 1);
      }
    }
    this.updateFilteredSeries();
    this.updateFilteredStandAlones();
    //this.updateFilteredStandAloneList(saBooks);
  }

  //checks if any filter checkboxes are checked
  checkFilterActive() {
    if(document.querySelectorAll("input:checked").length > 0) { this.filterActive = true; }
    else { this.filterActive = false; }
  }

  //all possible series that fit any filters
  retrievePossibleSeries(): Series[] {
    var filter;
    let series: Series[] = [];
    for(let i = 0; i < this.activeFilters.length; i++) {
      filter = this.activeFilters[i];
      if(filter instanceof Author) {
        series = series.concat(this.dataService.getSeriesByAuthor(filter).filter(s2 =>
          !series.some(s1 => s1.SeriesId === s2.SeriesId)));
      }
      else if(filter instanceof Genre) {
        series = series.concat(this.dataService.getSeriesByGenre(filter).filter(s2 =>
          !series.some(s1 => s1.SeriesId === s2.SeriesId)));
      }
      else if(filter instanceof Publisher) {
        series = series.concat(this.dataService.getSeriesByPublisher(filter).filter(s2 =>
          !series.some(s1 => s1.SeriesId === s2.SeriesId)));
      }
    }
    return series;
  }

  //all possible books that fit any filters
  retrievePossibleBooks(): Book[] {
    var filter;
    let books: Book[] = [];
    for(let i = 0; i < this.activeFilters.length; i++) {
      filter = this.activeFilters[i];
      if(filter instanceof Author) {
        books = books.concat(this.dataService.getBooksByAuthor(filter).filter(b2 =>
          !books.some(b1 => b1.BookId === b2.BookId)));  
      }
      else if(filter instanceof Genre) {
        books = books.concat(this.dataService.getBooksByGenre(filter).filter(b2 =>
          !books.some(b1 => b1.BookId === b2.BookId))); 
      }
      else if(filter instanceof Publisher) {
        books = books.concat(this.dataService.getBooksByPublisher(filter).filter(b2 =>
          !books.some(b1 => b1.BookId === b2.BookId))); 
      }
    }
    return books;
  }


  /******************* COMBINATION FILTER METHOD *******************************/
  updateFilteredSeries() {
    let filteredSeries: Series[] = [];
    let currentGenres: Genre[] = [], currentAuthor, currentPublisher;
    let series: Series[] = this.retrievePossibleSeries();

    if(this.filterTypeCount[0] >= 1 && this.filterTypeCount[1] == 0 && this.filterTypeCount[2] == 0) {
      //author
      for(let i = 0; i < series.length; i++) {
        currentAuthor = this.dataService.getAuthorBySeries(series[i]);
        if(this.activeFilters.includes(currentAuthor) && !filteredSeries.includes(series[i])) {
          filteredSeries.push(series[i]);
        }
      }
    }
    else if(this.filterTypeCount[0] == 0 && this.filterTypeCount[1] == 0 && this.filterTypeCount[2] >= 1) {
      //pub
      for(let i = 0; i < series.length; i++) {
        currentPublisher = this.dataService.getPublisherBySeries(series[i]);
        if(this.activeFilters.includes(currentPublisher) && !filteredSeries.includes(series[i])) {
          filteredSeries.push(series[i]);
        }
      }
    }
    else if(this.filterTypeCount[0] == 0 && this.filterTypeCount[1] >= 1 && this.filterTypeCount[2] == 0) {
      //genre
      for(let i = 0; i < series.length; i++) {
        currentGenres = this.dataService.getGenresBySeries(series[i]);
        if(this.activeGenres.every(g => currentGenres.includes(g)) && !filteredSeries.includes(series[i])) {
          filteredSeries.push(series[i]);
        }
      }
    }
    else if(this.filterTypeCount[0] >= 1 && this.filterTypeCount[1] >= 1 && this.filterTypeCount[2] == 0) {
      //author, genre
      for(let i = 0; i < series.length; i++) {
        currentAuthor = this.dataService.getAuthorBySeries(series[i]);
        currentGenres = this.dataService.getGenresBySeries(series[i]);
        if(this.activeGenres.every(g => currentGenres.includes(g)) && this.activeFilters.includes(currentAuthor) && !filteredSeries.includes(series[i])) {
          filteredSeries.push(series[i]);
        }
      }
    }
    else if(this.filterTypeCount[0] >= 1 && this.filterTypeCount[1] == 0 && this.filterTypeCount[2] >= 1) {
      //author, pub
      for(let i = 0; i < series.length; i++) {
        currentAuthor = this.dataService.getAuthorBySeries(series[i]);
        currentPublisher = this.dataService.getPublisherBySeries(series[i]);
        if(this.activeFilters.includes(currentAuthor) && this.activeFilters.includes(currentPublisher)) {
          filteredSeries.push(series[i]);
        }
      }
    } 
    else if(this.filterTypeCount[0] == 0 && this.filterTypeCount[1] >= 1 && this.filterTypeCount[2] >= 1) {
      //genre, pub
      for(let i = 0; i < series.length; i++) {
        currentPublisher = this.dataService.getPublisherBySeries(series[i]);
        currentGenres = this.dataService.getGenresBySeries(series[i]);
        for(let j = 0; j < currentGenres.length; j++) {
          if(this.activeGenres.every(g => currentGenres.includes(g)) && this.activeFilters.includes(currentPublisher) && !filteredSeries.includes(series[i])) {
            filteredSeries.push(series[i]);
          }
        }
      }
    }
    else if(this.filterTypeCount[0] >= 1 && this.filterTypeCount[1] >= 1 && this.filterTypeCount[2] >= 1) {
      //all
      for(let i = 0; i < series.length; i++) {
        currentAuthor = this.dataService.getAuthorBySeries(series[i]);
        currentGenres = this.dataService.getGenresBySeries(series[i]);
        currentPublisher = this.dataService.getPublisherBySeries(series[i]);
        for(let j = 0; j < currentGenres.length; j++) {
          if(this.activeGenres.every(g => currentGenres.includes(g)) && this.activeFilters.includes(currentAuthor) && this.activeFilters.includes(currentPublisher)) {
            if(!filteredSeries.includes(series[i])) {
              filteredSeries.push(series[i]);
            }
          }
        }
      }
    }
    this.filteredSeriesList = filteredSeries;
  }


  updateFilteredStandAlones() {
    let filteredBooks: Book[] = [];
    let currentGenres: Genre[] = [], currentAuthor, currentPublisher;
    let books: Book[] = this.retrievePossibleBooks();

    if(this.filterTypeCount[0] >= 1 && this.filterTypeCount[1] == 0 && this.filterTypeCount[2] == 0) {
      //author
      for(let i = 0; i < books.length; i++) {
        currentAuthor = this.dataService.getBookAuthor(books[i]);
        if(this.activeFilters.includes(currentAuthor) && !filteredBooks.includes(books[i])
           && books[i].StandAlone == true) {
          filteredBooks.push(books[i]);
        }
      }
    }
    else if(this.filterTypeCount[0] == 0 && this.filterTypeCount[1] == 0 && this.filterTypeCount[2] >= 1) {
      //pub
      for(let i = 0; i < books.length; i++) {
        currentPublisher = this.dataService.getPublisherById(books[i].PublisherId);
        if(this.activeFilters.includes(currentPublisher) && !filteredBooks.includes(books[i])
           && books[i].StandAlone == true) {
          filteredBooks.push(books[i]);
        }
      }
    }
    else if(this.filterTypeCount[0] == 0 && this.filterTypeCount[1] >= 1 && this.filterTypeCount[2] == 0) {
      //genre
      for(let i = 0; i < books.length; i++) {
        currentGenres = this.dataService.getGenresByBook(books[i]);
        if(this.activeGenres.every(g => currentGenres.includes(g)) && !filteredBooks.includes(books[i]) 
          && books[i].StandAlone == true) {
          filteredBooks.push(books[i]);
        }
      }
    }
    else if(this.filterTypeCount[0] >= 1 && this.filterTypeCount[1] >= 1 && this.filterTypeCount[2] == 0) {
      //author, genre
      for(let i = 0; i < books.length; i++) {
        currentAuthor = this.dataService.getBookAuthor(books[i]);
        currentGenres = this.dataService.getGenresByBook(books[i]);
        if(this.activeGenres.every(g => currentGenres.includes(g)) && this.activeFilters.includes(currentAuthor) 
          && !filteredBooks.includes(books[i]) && books[i].StandAlone == true) {
          filteredBooks.push(books[i]);
        }
      }
    }
    else if(this.filterTypeCount[0] >= 1 && this.filterTypeCount[1] == 0 && this.filterTypeCount[2] >= 1) {
      //author, pub
      for(let i = 0; i < books.length; i++) {
        currentAuthor = this.dataService.getBookAuthor(books[i]);
        currentPublisher = this.dataService.getPublisherById(books[i].PublisherId);
        if(this.activeFilters.includes(currentAuthor) && this.activeFilters.includes(currentPublisher) 
          && books[i].StandAlone == true) {
          filteredBooks.push(books[i]);
        }
      }
    } 
    else if(this.filterTypeCount[0] == 0 && this.filterTypeCount[1] >= 1 && this.filterTypeCount[2] >= 1) {
      //genre, pub
      for(let i = 0; i < books.length; i++) {
        currentPublisher = this.dataService.getPublisherById(books[i].PublisherId);
        currentGenres = this.dataService.getGenresByBook(books[i]);
        for(let j = 0; j < currentGenres.length; j++) {
          if(this.activeGenres.every(g => currentGenres.includes(g)) && this.activeFilters.includes(currentPublisher) 
            && !filteredBooks.includes(books[i]) && books[i].StandAlone == true) {
            filteredBooks.push(books[i]);
          }
        }
      }
    }
    else if(this.filterTypeCount[0] >= 1 && this.filterTypeCount[1] >= 1 && this.filterTypeCount[2] >= 1) {
      //all
      for(let i = 0; i < books.length; i++) {
        currentAuthor = this.dataService.getBookAuthor(books[i]);
        currentGenres = this.dataService.getGenresByBook(books[i]);
        currentPublisher = this.dataService.getPublisherById(books[i].PublisherId);
        for(let j = 0; j < currentGenres.length; j++) {
          if(this.activeGenres.every(g => currentGenres.includes(g)) && this.activeFilters.includes(currentAuthor) 
            && this.activeFilters.includes(currentPublisher) && books[i].StandAlone == true) {
          if(!filteredBooks.includes(books[i])) {
              filteredBooks.push(books[i]);
            }
          }
        }
      }
    }
    this.filteredStandAloneList = filteredBooks;
    this.updateFilteredAuthorList(filteredBooks);
  }

  //update stand alones off filters
  updateFilteredAuthorList(books: Book[]) {
    let authorList: Author[] = [];
    var author;
    for(let i = 0; i < books.length; i++) {
      author = this.dataService.getBookAuthor(books[i])
      if(!authorList.includes(author)) {
        authorList.push(author);
      }
    }
    this.filteredAuthorList = authorList;
  }
}
