import { Routes } from '@angular/router';
import { SeriesPageComponent } from './series-page/series-page.component';
import { BookPageComponent } from './book-page/book-page.component';

export const routes: Routes = [
    { path: 'series-page', component: SeriesPageComponent },
    { path: 'book-page', component: BookPageComponent },
  ];
