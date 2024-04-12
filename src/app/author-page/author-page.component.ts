import { Component } from '@angular/core';
import { SeriesComponent } from "../series/series.component";

@Component({
    selector: 'app-author-page',
    standalone: true,
    templateUrl: './author-page.component.html',
    styleUrl: './author-page.component.css',
    imports: [SeriesComponent]
})
export class AuthorPageComponent {

}
