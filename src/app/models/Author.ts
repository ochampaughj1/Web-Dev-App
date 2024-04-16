export class Author {
    AuthorId: number;
    AuthorName: string;
    AuthorLink: string;

    constructor(authorId: number, authorName: string, authorLink: string) {
        this.AuthorId = authorId;
        this.AuthorName = authorName;
        this.AuthorLink = authorLink;
    }
}