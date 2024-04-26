import { Component, OnInit } from '@angular/core';
import { SeriesComponent } from "../series/series.component";
import { DataService } from '../data/DataService';
import { Series } from '../models/Series';
import { ActivatedRoute } from '@angular/router';
import { Author } from '../models/Author';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-author-page',
    standalone: true,
    templateUrl: './author-page.component.html',
    styleUrl: './author-page.component.css',
    imports: [SeriesComponent, NgFor]
})
export class AuthorPageComponent implements OnInit{

    //initializes data service
    constructor(private dataService: DataService, private route: ActivatedRoute) {}

    //variables for display information
    seriesList: Series[] = [];
    author: any;
    type: string = "authorPage";

    //gets author data from router link
    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            let authorData = JSON.parse(atob(params['data']));
            this.author = authorData;
            this.seriesList = this.dataService.getSeriesByAuthor(authorData);
        });
    }

}
