import { Component, OnInit } from '@angular/core';
import { SeriesComponent } from "../series/series.component";
import { DataService } from '../data/DataService';
import { Series } from '../models/Series';
import { ActivatedRoute } from '@angular/router';
import { Author } from '../models/Author';
import { NgFor, NgIf } from '@angular/common';
import { Book } from '../models/Book';
import { StandAloneComponent } from "../stand-alone/stand-alone.component";
import { BookComponent } from "../book/book.component";

@Component({
    selector: 'app-author-page',
    standalone: true,
    templateUrl: './author-page.component.html',
    styleUrl: './author-page.component.css',
    imports: [SeriesComponent, NgFor, NgIf, StandAloneComponent, BookComponent]
})
export class AuthorPageComponent implements OnInit{

    //initializes data service
    constructor(private dataService: DataService, private route: ActivatedRoute) {}

    //variables for display information
    seriesList: Series[] = [];
    author: any;
    type: string = "authorPage";
    booksList: Book[] = [];
    standAlones: Book[] = [];

    //gets author data from router link
    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            let standAloneBookIds: number[] = [];
            let seriesBookIds: number[] = [];
            let authorData = JSON.parse(atob(params['data']));
            this.author = authorData;
            //gets all books by author and separates them by if they are series or stand alone 
            this.booksList = this.dataService.getBooksByAuthor(this.author);
            for(let i = 0; i < this.booksList.length; i++) {
                if(this.booksList[i].StandAlone == false) {
                    seriesBookIds.push(this.booksList[i].BookId);
                }
                else { 
                    standAloneBookIds.push(this.booksList[i].BookId);
                }
            }
            //Retrieves series and stand alone books
            if(seriesBookIds.length > 0) {
                this.seriesList = this.dataService.getSeriesByBooks(seriesBookIds);
            }
            if(standAloneBookIds.length > 0) {
                this.standAlones = this.dataService.getBooksById(standAloneBookIds);
            }
        });
    }

}