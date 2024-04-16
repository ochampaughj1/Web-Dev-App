//Authors
const a1 = new Author(1, "Nicholas Sansbury Smith", "./temp");
const a2 = new Author(2, "Marie Lu", "./temp");
const a3 = new Author(3, "Michael Grant", "./temp");
const a4 = new Author(4, "Alexander Gordon Smith", "./temp");
const a5 = new Author(5, "Lex Thomas", "./temp");
const a6 = new Author(6, "Alexandra Bracken", "./temp");
const a7 = new Author(7, "K.A. Riley", "./temp");
const a8 = new Author(8, "Veronica Roth", "./temp");
const a9 = new Author(9, "Dan Wells", "./temp");
const a10 = new Author(10, "E.G. Michaels", "./temp");
const a11 = new Author(11, "Robison Wells", "./temp");
const a12 = new Author(12, "Charlie Higson", "./temp");
const a13 = new Author(13, "Emmy Laybourne", "./temp");
const a14 = new Author(14, "Brian Falkner", "./temp");

/********* Book Authors **************/
//Hell Divers
const ba1 = new BookAuthor(1, 1);
const ba2 = new BookAuthor(2, 1);
const ba3 = new BookAuthor(3, 1);
const ba4 = new BookAuthor(4, 1);
const ba5 = new BookAuthor(5, 1);
const ba6 = new BookAuthor(6, 1);
const ba7 = new BookAuthor(7, 1);
const ba8 = new BookAuthor(8, 1);
const ba9 = new BookAuthor(9, 1);
const ba10 = new BookAuthor(10, 1);
const ba11 = new BookAuthor(11, 1);
//Legend
const ba12 = new BookAuthor(12, 2);
const ba13 = new BookAuthor(13, 2);
const ba14 = new BookAuthor(14, 2);
const ba15 = new BookAuthor(15, 2);
//BZRK
const ba16 = new BookAuthor(16, 3);
const ba17 = new BookAuthor(17, 3);
const ba18 = new BookAuthor(18, 3);
//The Young Elites
const ba19 = new BookAuthor(19, 2);
const ba20 = new BookAuthor(20, 2);
const ba21 = new BookAuthor(21, 2);
//Escape From Furnace
const ba22 = new BookAuthor(22, 4);
const ba23 = new BookAuthor(23, 4);
const ba24 = new BookAuthor(24, 4);
const ba25 = new BookAuthor(25, 4);
const ba26 = new BookAuthor(26, 4);
//Gone
const ba27 = new BookAuthor(27, 3);
const ba28 = new BookAuthor(28, 3);
const ba29 = new BookAuthor(29, 3);
const ba30 = new BookAuthor(30, 3);
const ba31 = new BookAuthor(31, 3);
const ba32 = new BookAuthor(32, 3);
//Monster
const ba33 = new BookAuthor(33, 3);
const ba34 = new BookAuthor(34, 3);
const ba35 = new BookAuthor(35, 3);
//Quarantine
const ba36 = new BookAuthor(36, 5);
const ba37 = new BookAuthor(37, 5);
const ba38 = new BookAuthor(38, 5);
const ba39 = new BookAuthor(39, 5);
//The Darkest Minds
const ba40 = new BookAuthor(40, 6);
const ba41 = new BookAuthor(41, 6);
const ba42 = new BookAuthor(42, 6);
const ba43 = new BookAuthor(43, 6);
const ba44 = new BookAuthor(44, 6);
//The Conspiracy Chronicles
const ba45 = new BookAuthor(45,7);
const ba46 = new BookAuthor(46,7);
const ba47 = new BookAuthor(47,7);
const ba48 = new BookAuthor(48,7);
const ba49 = new BookAuthor(49,7);
const ba50 = new BookAuthor(50,7);
const ba51 = new BookAuthor(51,7);
const ba52 = new BookAuthor(52,7);
const ba53 = new BookAuthor(53,7);
const ba54 = new BookAuthor(54,7);
const ba55 = new BookAuthor(55,7);
const ba56 = new BookAuthor(56,7);
const ba57 = new BookAuthor(57,7);
const ba58 = new BookAuthor(58,7);
const ba59 = new BookAuthor(59,7);
//Divergent
const ba60 = new BookAuthor(60,8);
const ba61 = new BookAuthor(61,8);
const ba62 = new BookAuthor(62,8);
const ba63 = new BookAuthor(63,8);
//Partials
const ba64 = new BookAuthor(64,9);
const ba65 = new BookAuthor(65,9);
const ba66 = new BookAuthor(66,9);
//Wretched
const ba67 = new BookAuthor(67,10);
const ba68 = new BookAuthor(68,10);
const ba69 = new BookAuthor(69,10);
const ba70 = new BookAuthor(70,10);
//Variant
const ba71 = new BookAuthor(71,11);
const ba72 = new BookAuthor(72,11);
//The Enemy 
const ba73 = new BookAuthor(73,12);
const ba74 = new BookAuthor(74,12);
const ba75 = new BookAuthor(75,12);
const ba76 = new BookAuthor(76,12);
const ba77 = new BookAuthor(77,12);
const ba78 = new BookAuthor(78,12);
const ba79 = new BookAuthor(79,12);
//Monument 14
const ba80 = new BookAuthor(80,13);
const ba81 = new BookAuthor(81,13);
const ba82 = new BookAuthor(82,13);
//Stand Alones
const ba83 = new BookAuthor(83,14);
const ba84 = new BookAuthor(84,14);

//**NOT UPDATED** 
//Series and Book hard data
const HellDivers = new Series(1, "Hell Divers", 11);
const h1 = new Book(1, 1, "Hell Divers", 200, "temp", 2000, "./assets/images/helldivers1.jpg", "Nicholas Sansbury Smith", false);
const h2 = new Book(2, 1, "Hell Divers: Ghosts", 200, "temp", 2000, "./assets/images/helldivers2.jpg", "Nicholas Sansbury Smith", false);
const h3 = new Book(3, 1, "Hell Divers: Deliverance", 200, "temp", 2000, "./assets/images/helldivers3.jpg", "Nicholas Sansbury Smith", false);
const h4 = new Book(4, 1, "Hell Divers: Wolves", 200, "temp", 2000, "./assets/images/helldivers4.jpg", "Nicholas Sansbury Smith", false);
const h5 = new Book(5, 1, "Hell Divers: Captives", 200, "temp", 2000, "./assets/images/helldivers5.jpg", "Nicholas Sansbury Smith", false);
const h6 = new Book(6, 1, "Hell Divers: Allegiance", 200, "temp", 2000, "./assets/images/helldivers6.jpg", "Nicholas Sansbury Smith", false);
const h7 = new Book(7, 1, "Hell Divers: Warriors", 200, "temp", 2000, "./assets/images/helldivers7.jpg", "Nicholas Sansbury Smith", false);
const h8 = new Book(8, 1, "Hell Divers: King Of The Wastes", 200, "temp", 2000, "./assets/images/helldivers8.jpg", "Nicholas Sansbury Smith", false);
const h9 = new Book(9, 1, "Hell Divers: Radioactive", 200, "temp", 2000, "./assets/images/helldivers9.jpg", "Nicholas Sansbury Smith", false);
const h10 = new Book(10, 1, "Hell Divers: Fallout", 200, "temp", 2000, "./assets/images/helldivers10.jpg", "Nicholas Sansbury Smith", false);
const h11 = new Book(11, 1, "Hell Divers: Renegades", 200, "temp", 2000, "./assets/images/helldivers11.jpg", "Nicholas Sansbury Smith", false);

const Legend = new Series(2, "Legend", 4);
const l1 = new Book(12, 2, "Legend", 200, "temp", 2000, "./assets/images/legend.jpg", "Marie Lu", false);
const l2 = new Book(13, 2, "Progidy", 200, "temp", 2000, "./assets/images/prodigy.jpg", "Marie Lu", false);
const l3 = new Book(14, 2, "Champion", 200, "temp", 2000, "./assets/images/champion.jpg", "Marie Lu", false);
const l4 = new Book(15, 2, "Rebel", 200, "temp", 2000, "./assets/images/rebel.jpg", "Marie Lu", false);

const BZRK = new Series(3, "BZRK", 3);
const b1 = new Book(16, 3, "BZRK", 200, "temp", 2000, "./assets/images/BZRK.jpg", "Michael Grant", false);
const b2 = new Book(17, 3, "BZRK: Reloaded", 200, "temp", 2000, "./assets/images/BZRK-Reloaded.jpg", "Michael Grant", false);
const b3 = new Book(18, 3, "BZRK: Apocalypse", 200, "temp", 2000, "./assets/images/BZRK-Apocalypse.jpg", "Michael Grant", false);

const YoungElites = new Series(4, "The Young Elites", 3);
const ye1 = new Book(19, 2, "The Young Elites", 200, "temp", 2000, "./assets/images/temp.jpg", "Marie Lu", false);
const ye2 = new Book(20, 2, "The Rose Society", 200, "temp", 2000, "./assets/images/temp.jpg", "Marie Lu", false);
const ye3 = new Book(21, 2, "The Midnight Star", 200, "temp", 2000, "./assets/images/temp.jpg", "Marie Lu", false);

const EscapeFromFurnace = new Series(5, "Escape From Furnace", 5);
const esc1 = new Book(22, 4, "Lockdown", 200, "temp", 2000, "./assets/images/temp.jpg", "Alexander Gordon Smith", false);
const esc2 = new Book(23, 4, "Solitary", 200, "temp", 2000, "./assets/images/temp.jpg", "Alexander Gordon Smith", false);
const esc3 = new Book(24, 4, "Death Sentence", 200, "temp", 2000, "./assets/images/temp.jpg", "Alexander Gordon Smith", false);
const esc4 = new Book(25, 4, "Fugitives", 200, "temp", 2000, "./assets/images/temp.jpg", "Alexander Gordon Smith", false);
const esc5 = new Book(26, 4, "Execution", 200, "temp", 2000, "./assets/images/temp.jpg", "Alexander Gordon Smith", false);

const Gone = new Series(6, "Gone", 6);
const g1 = new Book(27, 3, "Gone", 200, "temp", 2000, "./assets/images/temp.jpg", "Michael Grant", false);
const g2 = new Book(28, 3, "Hunger", 200, "temp", 2000, "./assets/images/temp.jpg", "Michael Grant", false);
const g3 = new Book(29, 3, "Lies", 200, "temp", 2000, "./assets/images/temp.jpg", "Michael Grant", false);
const g4 = new Book(30, 3, "Plague", 200, "temp", 2000, "./assets/images/temp.jpg", "Michael Grant", false);
const g5 = new Book(31, 3, "Fear", 200, "temp", 2000, "./assets/images/temp.jpg", "Michael Grant", false);
const g6 = new Book(32, 3, "Light", 200, "temp", 2000, "./assets/images/temp.jpg", "Michael Grant", false);

const Monster = new Series(7, "Monster", 3);
const mon1 = new Book(33, 3, "Monster", 200, "temp", 2000, "./assets/images/temp.jpg", "Michael Grant", false);
const mon2 = new Book(34, 3, "Villain", 200, "temp", 2000, "./assets/images/temp.jpg", "Michael Grant", false);
const mon3 = new Book(35, 3, "Hero", 200, "temp", 2000, "./assets/images/temp.jpg", "Michael Grant", false);

const Quarantine = new Series(8, "Quarantine", 4);
const q1 = new Book(36, 5, "The Loners", 200, "temp", 2000, "./assets/images/temp.jpg", "Lex Thomas", false);
const q2 = new Book(37, 5, "The Saints", 200, "temp", 2000, "./assets/images/temp.jpg", "Lex Thomas", false);
const q3 = new Book(38, 5, "The Burnouts", 200, "temp", 2000, "./assets/images/temp.jpg", "Lex Thomas", false);
const q4 = new Book(39, 5, "The Giant", 200, "temp", 2000, "./assets/images/temp.jpg", "Lex Thomas", false);

const DarkestMinds = new Series(9, "The Darkest Minds", 5);
const dm1 = new Book(40, 6, "The Darkest Minds", 200, "temp", 2000, "./assets/images/temp.jpg", "Alexandra Bracken", false);
const dm2 = new Book(41, 6, "Never Fade", 200, "temp", 2000, "./assets/images/temp.jpg", "Alexandra Bracken", false);
const dm3 = new Book(42, 6, "In The Afterlight", 200, "temp", 2000, "./assets/images/temp.jpg", "Alexandra Bracken", false);
const dm4 = new Book(43, 6, "Through The Dark", 200, "temp", 2000, "./assets/images/temp.jpg", "Alexandra Bracken", false);
const dm5 = new Book(44, 6, "The Darkest Legacy", 200, "temp", 2000, "./assets/images/temp.jpg", "Alexandra Bracken", false);

const ConspiracyChronicles = new Series(10, "The Conspiracy Chronicles", 15);
const cc1 = new Book(45, 7, "Recruitment", 200, "temp", 2000, "./assets/images/temp.jpg", "K.A. Riley", false);
const cc2 = new Book(46, 7, "Render", 200, "temp", 2000, "./assets/images/temp.jpg", "K.A. Riley", false);
const cc3 = new Book(47, 7, "Rebellion", 200, "temp", 2000, "./assets/images/temp.jpg", "K.A. Riley", false);
const cc4 = new Book(48, 7, "Survival", 200, "temp", 2000, "./assets/images/temp.jpg", "K.A. Riley", false);
const cc5 = new Book(49, 7, "Sacrifice", 200, "temp", 2000, "./assets/images/temp.jpg", "K.A. Riley", false);
const cc6 = new Book(50, 7, "Synthesis", 200, "temp", 2000, "./assets/images/temp.jpg", "K.A. Riley", false);
const cc7 = new Book(51, 7, "Travelers", 200, "temp", 2000, "./assets/images/temp.jpg", "K.A. Riley", false);
const cc8 = new Book(52, 7, "Transfigured", 200, "temp", 2000, "./assets/images/temp.jpg", "K.A. Riley", false);
const cc9 = new Book(53, 7, "Terminus", 200, "temp", 2000, "./assets/images/temp.jpg", "K.A. Riley", false);
const cc10 = new Book(54, 7, "Emergents Academy", 200, "temp", 2000, "./assets/images/temp.jpg", "K.A. Riley", false);
const cc11 = new Book(55, 7, "Cult Of The Devoted", 200, "temp", 2000, "./assets/images/temp.jpg", "K.A. Riley", false);
const cc12 = new Book(56, 7, "Army Of The Unsettled", 200, "temp", 2000, "./assets/images/temp.jpg", "K.A. Riley", false);
const cc13 = new Book(57, 7, "Arise", 200, "temp", 2000, "./assets/images/temp.jpg", "K.A. Riley", false);
const cc14 = new Book(58, 7, "Banished", 200, "temp", 2000, "./assets/images/temp.jpg", "K.A. Riley", false);
const cc15 = new Book(59, 7, "Crusade", 200, "temp", 2000, "./assets/images/temp.jpg", "K.A. Riley", false);

const Divergent = new Series(11, "Divergent", 4);
const div1 = new Book(60, 8, "Divergent", 200, "temp", 2000, "./assets/images/temp.jpg", "Veronica Roth", false);
const div2 = new Book(61, 8, "Insurgent", 200, "temp", 2000, "./assets/images/temp.jpg", "Veronica Roth", false);
const div3 = new Book(62, 8, "Allegiant", 200, "temp", 2000, "./assets/images/temp.jpg", "Veronica Roth", false);
const div4 = new Book(63, 8, "Four", 200, "temp", 2000, "./assets/images/temp.jpg", "Veronica Roth", false);


const Partials = new Series(12, "Partials", 3);
const p1 = new Book(64, 9, "Partials", 200, "temp", 2000, "./assets/images/temp.jpg", "Dan Wells", false);
const p2 = new Book(65, 9, "Fragments", 200, "temp", 2000, "./assets/images/temp.jpg", "Dan Wells", false);
const p3 = new Book(66, 9, "Ruins", 200, "temp", 2000, "./assets/images/temp.jpg", "Dan Wells", false);

const Wretched = new Series(13, "The Wretched", 4);
const w1 = new Book(67, 10, "The Wretched", 200, "temp", 2000, "./assets/images/temp.jpg", "E.G. Michaels", false);
const w2 = new Book(68, 10, "Wretched Culling", 200, "temp", 2000, "./assets/images/temp.jpg", "E.G. Michaels", false);
const w3 = new Book(69, 10, "Wretched Retribution", 200, "temp", 2000, "./assets/images/temp.jpg", "E.G. Michaels", false);
const w4 = new Book(70, 10, "Wretched Aftermath", 200, "temp", 2000, "./assets/images/temp.jpg", "E.G. Michaels", false);

const Variant = new Series(14, "Variant", 2);
const v1 = new Book(71, 11, "Variant", 200, "temp", 2000, "./assets/images/temp.jpg", "Robison Wells", false);
const v2 = new Book(72, 11, "Feedback", 200, "temp", 2000, "./assets/images/temp.jpg", "Robison Wells", false);

const Enemy = new Series(15, "The Enemy", 7);
const e1 = new Book(73, 12, "The Enemy", 200, "temp", 2000, "./assets/images/temp.jpg", "Charlie Higson", false);
const e2 = new Book(74, 12, "The Dead", 200, "temp", 2000, "./assets/images/temp.jpg", "Charlie Higson", false);
const e3 = new Book(75, 12, "The Fear", 200, "temp", 2000, "./assets/images/temp.jpg", "Charlie Higson", false);
const e4 = new Book(76, 12, "The Sacrifice", 200, "temp", 2000, "./assets/images/temp.jpg", "Charlie Higson", false);
const e5 = new Book(77, 12, "The Fallen", 200, "temp", 2000, "./assets/images/temp.jpg", "Charlie Higson", false);
const e6 = new Book(78, 12, "The Hunted", 200, "temp", 2000, "./assets/images/temp.jpg", "Charlie Higson", false);
const e7 = new Book(79, 12, "The End", 200, "temp", 2000, "./assets/images/temp.jpg", "Charlie Higson", false);

const Monument14 = new Series(16, "Monument 14", 3);
const m1 = new Book(80, 13, "Monument 14", 200, "temp", 2000, "./assets/images/temp.jpg", "Emmy Laybourne", false);
const m2 = new Book(81, 13, "Sky On Fire", 200, "temp", 2000, "./assets/images/temp.jpg", "Emmy Laybourne", false);
const m3 = new Book(82, 13, "Savage Drift", 200, "temp", 2000, "./assets/images/temp.jpg", "Emmy Laybourne", false);


const BrainJack = new Book(83, 7, "Brain Jack", 200, "temp", 2000, "./assets/images/temp.jpg", "Brian Falkner", true);
const TomorrowCode = new Book(84, 7, "The Tomorrow Code", 200, "temp", 2000, "./assets/images/temp.jpg", "Brian Falkner", true);



import { Injectable } from "@angular/core";
import { Series } from "../models/Series";
import { Book } from "../models/Book";
import { Author } from "../models/Author";
import { BookAuthor } from "../models/BookAuthor";


@Injectable({providedIn: 'root'})
export class DataService {
  //testing data
  seriesList: Series[] = [HellDivers, Legend, BZRK, YoungElites, EscapeFromFurnace, Gone, Monster, Quarantine, DarkestMinds, 
    ConspiracyChronicles, Divergent, Partials, Wretched, Variant, Enemy, Monument14
  ];
  booksList: Book[] = [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, 
    l1, l2, l3, l4, b1, b2, b3, ye1, ye2, ye3, esc1, esc2, esc3, esc4, esc5, 
    g1, g2, g3, g4, g5, g6, mon1, mon2, mon3, q1, q2, q3, q4, dm1, dm2, dm3, dm4, dm5, 
    cc1, cc2, cc3, cc4, cc5, cc6, cc7, cc8, cc9, cc10, cc11, cc12, cc13, cc14, cc15,
    div1, div2, div3, div4, p1, p2, p3, w1, w2, w3, w4, v1, v2, e1, e2, e3, e4, e5, e6, e7, 
    m1, m2, m3, BrainJack, TomorrowCode
  ];
  
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