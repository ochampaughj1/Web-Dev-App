import { Component, Inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { MatDialog, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent,} from '@angular/material/dialog';

@Component({
  selector: 'app-login-dialog',
  standalone: true,
  imports: [NgIf],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.css'
})
export class LoginDialogComponent {
  constructor() {}

  newUser: boolean = false;

  displaySwitch() {
    if(this.newUser == false) { this.newUser = true;}
    else { this.newUser = false; }
  }
}
