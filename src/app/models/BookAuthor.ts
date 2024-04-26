/* Model for book author object */
export class BookAuthor {
    BookId: number; 
    AuthorId: number;

    constructor(bookId: number, authorId: number) {
        this.BookId = bookId;
        this.AuthorId = authorId;
    }
}