import { Component } from '@angular/core';
import { BookComponent } from '../book/book.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-stand-alone',
    standalone: true,
    templateUrl: './stand-alone.component.html',
    styleUrl: './stand-alone.component.css',
    imports: [BookComponent, NgFor]
})
export class StandAloneComponent {

}
