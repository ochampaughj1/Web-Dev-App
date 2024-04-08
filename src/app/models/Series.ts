export class Series {
    SeriesId: number;
    Title: string;
    NumBooks: number;

    constructor(seriesId: number, title: string, numBooks: number) {
        this.SeriesId = seriesId;
        this.Title = title;
        this.NumBooks = numBooks;
    }
}