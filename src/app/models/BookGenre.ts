export class BookGenre {
    BookId: number; 
    GenreId: number;

    constructor(bookId: number, genreId: number) {
        this.BookId = bookId;
        this.GenreId = genreId;
    }
}