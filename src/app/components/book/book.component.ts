import { Component, Input } from '@angular/core';
import { Book } from '../../models/Book';
import { Router, NavigationExtras} from '@angular/router';
import { AccountService } from '../../Services/AccountService';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  //initializes router to use for book page
  constructor(private router: Router, private accountService: AccountService){}

  //book passed down from series component
  @Input() book: any;

  //variable to hold book information to pass along route
  data: any;

  userAccount: any;

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

  //Adds book to accounts wishlist
  AddToWishlist() {
    this.userAccount = this.accountService.LoggedInUser;
    if(!this.userAccount.WishList.includes(this.book)) {
      this.userAccount.WishList.push(this.book);
    }
    event?.stopPropagation();
  }
}
