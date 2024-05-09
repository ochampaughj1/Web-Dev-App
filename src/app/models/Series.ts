/* Model for series object */
export class Series {
    SeriesId: number;
    Title: string;
    NumBooks: number;
    Description: string;

    constructor(seriesId: number, title: string, numBooks: number, description: string) {
        this.SeriesId = seriesId;
        this.Title = title;
        this.NumBooks = numBooks;
        this.Description = description;
    }
}