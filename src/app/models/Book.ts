export class Book {
    BookId: number;
    PublisherId: number;
    Title: string;
    Pages: number;
    Summary: string;
    PublishYear: number;
    Image: string;

    //temp 
    Author: string;

    constructor(bookId: number, publisherId: number, title: string, pages: number, summary: string, publishYear: number, image: string, author: string) {
        this.BookId =  bookId;
        this.PublisherId = publisherId;
        this.Title = title;
        this.Pages = pages;
        this.Summary = summary;
        this.PublishYear = publishYear;
        this.Image = image;

        //temp 
        this.Author = author;
    }
}