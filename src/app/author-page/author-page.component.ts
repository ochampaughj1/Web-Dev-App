import { Component, OnInit } from '@angular/core';
import { SeriesComponent } from "../series/series.component";
import { DataService } from '../data/DataService';
import { Series } from '../models/Series';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-author-page',
    standalone: true,
    templateUrl: './author-page.component.html',
    styleUrl: './author-page.component.css',
    imports: [SeriesComponent]
})
export class AuthorPageComponent implements OnInit{

    constructor(private dataService: DataService, private route: ActivatedRoute) {}

    seriesList: Series[] = this.dataService.getSeriesList();
    author = '';

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            let authorData = JSON.parse(atob(params['data']));
            this.author = authorData
        });
    }

}
