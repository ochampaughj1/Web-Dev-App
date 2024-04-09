import { Routes } from '@angular/router';
import { LibraryPageComponent } from './library-page/library-page.component';
import { BookPageComponent } from './book-page/book-page.component';

export const routes: Routes = [
    { path: 'library-page', component: LibraryPageComponent },
    { path: 'book-page', component: BookPageComponent},
  ];
