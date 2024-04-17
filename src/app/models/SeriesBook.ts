export class SeriesBook {
    SeriesId: number;
    BookId: number;

    constructor(bookId: number, seriesId: number) {
        this.SeriesId = seriesId;
        this.BookId = bookId;
    }
}