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
  constructor(private dataService: DataService) {

  }


  //Need to implement a method to sort and pass stand alone books as series
  

  //master lists for books, authors, and series
  seriesList: Series[] = this.dataService.getSeriesList();
  booksList: Book[] = this.dataService.getBookList();
  authorList: Author[] = this.dataService.getAuthorsList();
  genreList: Genre[] = this.dataService.getGenreList();
  publisherList: Publisher[] = this.dataService.getPublisherList();

  //stand alone books and elements
  standAloneBooks: Book[] = this.dataService.getStandAloneBooks();
  standAloneBookAuthors: Author[] = this.dataService.getStandAloneBookAuthors(this.standAloneBooks);

  //filter items lists for updating page
  filteredSeriesList: Series[] = [];
  filteredStandAloneList: Book[] = [];
  filterActive: boolean = false;

  //filters series
  //FILTER DOESNT WORK FOR STANDALONES!!!
  filterSeries(selection:any) {
    this.checkFilterActive();

    var result;
    if(this.authorList.includes(selection)) {
      result = this.dataService.getSeriesByAuthor(selection);
      this.updateFilteredSeriesList(result);
    }
    else if(this.genreList.includes(selection)) {
      result = this.dataService.getSeriesByGenre(selection);
      this.updateFilteredSeriesList(result);
    }
    else if(this.publisherList.includes(selection)) {
      result = this.dataService.getSeriesByPublisher(selection);
      this.updateFilteredSeriesList(result);
    }
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
