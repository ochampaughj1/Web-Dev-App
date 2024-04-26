/* Model for publisher object */
export class Publisher {
    PublisherId: number; 
    PublisherName: string;

    constructor(publisherId: number, publisherName: string) {
        this.PublisherId = publisherId;
        this.PublisherName = publisherName;
    }
}