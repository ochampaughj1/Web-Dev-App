import { Injectable } from "@angular/core";
import { Series } from "../models/Series";
import { Book } from "../models/Book";
import { Author } from "../models/Author";
import { BookAuthor } from "../models/BookAuthor";
import { Genre } from "../models/Genre";
import { BookGenre } from "../models/BookGenre";
import { Publisher } from "../models/Publisher";
import { SeriesBook } from "../models/SeriesBook";
import { AuthorPageComponent } from "../author-page/author-page.component";


@Injectable({providedIn: 'root'})
export class SortService {
    
  //sorts authors alphabetically based on author name
  sortAuthors(authors: Author[]) : Author[] {
    for(let i = 0; i < authors.length; i++) {
      for(let j = 0; j < authors.length; j++) {
        if(authors[i].AuthorName < authors[j].AuthorName) {
          var temp = authors[i];
          authors[i] = authors[j];
          authors[j] = temp;
        }
      }
    }
    return authors
  }
  
  //sorts genres alphabetically based on genre name
  sortGenres(genres: Genre[]) : Genre[] {
    for(let i = 0; i < genres.length; i++) {
      for(let j = 0; j < genres.length; j++) {
        if(genres[i].GenreName < genres[j].GenreName) {
          var temp = genres[i];
          genres[i] = genres[j];
          genres[j] = temp;
        }
      }
    }
    return genres
  }
  
  //sorts publishers alphabetically based on publisher name
  sortPublishers(publishers: Publisher[]) : Publisher[] {
    for(let i = 0; i < publishers.length; i++) {
      for(let j = 0; j < publishers.length; j++) {
        if(publishers[i].PublisherName < publishers[j].PublisherName) {
          var temp = publishers[i];
          publishers[i] = publishers[j];
          publishers[j] = temp;
        }
      }
    }
    return publishers
  }
  
  //sorts series alphabetically based on series title
  sortSeries(series: Series[]) : Series[]{
      var s1, s2;
      for(let i = 0; i < series.length; i++) {
        for(let j = 0; j < series.length; j++) {
          s1 = series[i];
          s2 = series[j];
          if(s1.Title < s2.Title) {
            var temp = series[i];
            series[i] = series[j];
            series[j] = temp;
          }
        }
      }
      return series;
    }
}