import { Routes } from '@angular/router';
import { LibraryPageComponent } from './pages/library-page/library-page.component';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { AuthorPageComponent } from './pages/author-page/author-page.component';
import { SeriesPageComponent } from './pages/series-page/series-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent},
  { path: 'library-page', component: LibraryPageComponent },
  { path: 'book-page', component: BookPageComponent},
  { path: 'author-page', component: AuthorPageComponent},
  { path: 'series-page', component: SeriesPageComponent},
];
