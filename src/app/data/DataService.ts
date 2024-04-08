//test series
const HellDivers = new Series(1, "Hell Divers", 11);
const h1 = new Book(1, 1, "Hell Divers", 200, "temp", 2000, "./assets/images/helldivers1.jpg", "Nicholas Sansbury Smith");
const h2 = new Book(2, 1, "Hell Divers: Ghosts", 200, "temp", 2000, "./assets/images/helldivers2.jpg", "Nicholas Sansbury Smith");
const h3 = new Book(3, 1, "Hell Divers: Deliverance", 200, "temp", 2000, "./assets/images/helldivers3.jpg", "Nicholas Sansbury Smith");
const h4 = new Book(4, 1, "Hell Divers: Wolves", 200, "temp", 2000, "./assets/images/helldivers4.jpg", "Nicholas Sansbury Smith");
const h5 = new Book(5, 1, "Hell Divers: Captives", 200, "temp", 2000, "./assets/images/helldivers5.jpg", "Nicholas Sansbury Smith");
const h6 = new Book(6, 1, "Hell Divers: Allegiance", 200, "temp", 2000, "./assets/images/helldivers6.jpg", "Nicholas Sansbury Smith");
const h7 = new Book(7, 1, "Hell Divers: Warriors", 200, "temp", 2000, "./assets/images/helldivers7.jpg", "Nicholas Sansbury Smith");
const h8 = new Book(8, 1, "Hell Divers: King Of The Wastes", 200, "temp", 2000, "./assets/images/helldivers8.jpg", "Nicholas Sansbury Smith");
const h9 = new Book(9, 1, "Hell Divers: Radioactive", 200, "temp", 2000, "./assets/images/helldivers9.jpg", "Nicholas Sansbury Smith");
const h10 = new Book(10, 1, "Hell Divers: Fallout", 200, "temp", 2000, "./assets/images/helldivers10.jpg", "Nicholas Sansbury Smith");
const h11 = new Book(11, 1, "Hell Divers: Renegades", 200, "temp", 2000, "./assets/images/helldivers11.jpg", "Nicholas Sansbury Smith");

const Legend = new Series(2, "Legend", 4);
const l1 = new Book(12, 2, "Legend", 200, "temp", 2000, "./assets/images/helldivers1.jpg", "Marie Lu");
const l2 = new Book(13, 2, "Progidy", 200, "temp", 2000, "./assets/images/helldivers2.jpg", "Marie Lu");
const l3 = new Book(14, 2, "Champion", 200, "temp", 2000, "./assets/images/helldivers3.jpg", "Marie Lu");
const l4 = new Book(15, 2, "Rebel", 200, "temp", 2000, "./assets/images/helldivers4.jpg", "Marie Lu")

const BZRK = new Series(3, "BZRK", 3);
const b1 = new Book(16, 3, "BZRK", 200, "temp", 2000, "./assets/images/helldivers5.jpg", "Michael Grant");
const b2 = new Book(17, 3, "BZRK: Reloaded", 200, "temp", 2000, "./assets/images/helldivers6.jpg", "Michael Grant");
const b3 = new Book(18, 3, "BZRK: Unleashed", 200, "temp", 2000, "./assets/images/helldivers7.jpg", "Michael Grant");


import { Injectable } from "@angular/core";
import { Series } from "../models/Series";
import { Book } from "../models/Book";

@Injectable({providedIn: 'root'})
export class DataService {
  //testing data
  public seriesList: Series[] = [HellDivers, Legend, BZRK];
  booksList: Book[] =[h1,h2,h3,h4,h5,h6,h7,h8,h9,h10,h11, l1, l2, l3, l4, b1, b2, b3];
  
  //public scope: Array<any> | boolean = false;
  constructor() {

  }

  public getSeriesList() {
    return this.seriesList;
  }

  public setSeriesList(seriesList: Series[]) {
    this.seriesList = seriesList;
  }

  public getBookList() {
    return this.booksList;
  }

  public setBookList(booksList: Book[]) {
    this.booksList = this.booksList;
  }
  
}