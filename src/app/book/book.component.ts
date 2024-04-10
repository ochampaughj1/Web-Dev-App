import { Component, Input } from '@angular/core';
import { Book } from '../models/Book';
import { Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  constructor(private router: Router){}

  @Input() book: any;
  data: any;

  //navigates to book-page and passes the selected book
  bookClick(): void {
    let data = btoa(JSON.stringify(this.book));
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data
      }
    };
    this.router.navigate(["book-page"], navigationExtras);
  }
}
