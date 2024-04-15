import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { Book } from '../models/Book';

@Component({
  selector: 'app-book-page',
  standalone: true,
  imports: [],
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.css'
})
export class BookPageComponent implements OnInit{
  constructor(private route: ActivatedRoute) {}

  book: any;

  //gets book data from router link
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let bookData = JSON.parse(atob(params['data']));
      this.book = bookData
    });
  }
}
