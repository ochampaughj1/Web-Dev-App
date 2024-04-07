export class Book {
    BookId: number;
    PublisherId: number;
    Title: string;
    Pages: number;
    Summary: string;
    PublishYear: number;

    constructor(bookId: number, publisherId: number, title: string, pages: number, summary: string, publishYear: number) {
        this.BookId =  bookId;
        this.PublisherId = publisherId;
        this.Title = title;
        this.Pages = pages;
        this.Summary = summary;
        this.PublishYear = publishYear;
    }
}