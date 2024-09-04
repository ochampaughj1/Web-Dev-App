import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from '../../models/Author';
import { Book } from '../../models/Book';
import { SeriesComponent } from '../../components/series/series.component';
import { DataService } from '../../Services/DataService';
import { NgFor } from '@angular/common';
import { Account } from '../../models/Account';
import { AccountService } from '../../Services/AccountService';

@Component({
  selector: 'app-series-page',
  standalone: true,
  imports: [SeriesComponent, NgFor],
  templateUrl: './series-page.component.html',
  styleUrl: './series-page.component.css'
})
export class SeriesPageComponent implements OnInit{
  constructor(private dataService: DataService, private route: ActivatedRoute, private accountService: AccountService){}

  author: any;
  series: any;
  books: Book[] = [];
  passedUser: Account = new Account("", "", "", []);

  //gets author data from router link
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        let seriesData = JSON.parse(atob(params['seriesData']));
        this.series = seriesData;
      });
      this.author = this.dataService.getAuthorBySeries(this.series);
      this.books = this.dataService.getBooksBySeries(this.series);
      this.passedUser = this.accountService.LoggedInUser;
    }
}
