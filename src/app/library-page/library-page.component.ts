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
  filteredSeriesList: Series[] = [];
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

  filterbyAuthors(author:string) {
    window.scroll(0,0);
    this.checkFilterActive()
    this.updateFilteredAuthorsList(author);

    var title;
    if(author == "Nicholas Sansbury Smith") {
      title = "Hell Divers";
      this.updateFilteredSeriesList(title);
    }
    else if(author == "Marie Lu") {
      title = "Legend";
      this.updateFilteredSeriesList(title);
    }
    else if(author == "Michael Grant") {
      title = "BZRK";
      this.updateFilteredSeriesList(title);
    }
  }

  checkFilterActive() {
    if(document.querySelectorAll("input:checked").length > 0) {
      this.filterActive = true;
    }
    else {
      this.filterActive = false;
    }
  }
  
  updateFilteredAuthorsList(author: string) {
    if(!this.filteredAuthorList.includes(author)) {
      this.filteredAuthorList.push(author);
    }
    else {
      var index = this.filteredAuthorList.indexOf(author);
      this.filteredAuthorList.splice(index, 1);
    }
  }

  updateFilteredSeriesList(title: string) {
    var selectedSeries = this.getSeriesByTitle(title);
    if(!this.filteredSeriesList.includes(selectedSeries)) {
      this.filteredSeriesList.push(selectedSeries);
    }
    else {
      var index = this.filteredSeriesList.indexOf(selectedSeries);
      this.filteredSeriesList.splice(index, 1); 
    }
  }

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
