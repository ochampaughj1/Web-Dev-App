import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-dialog',
  standalone: true,
  imports: [],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.css'
})
export class LoginDialogComponent {
  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>){
  }

  ngOnInit() {
    this.dialogRef.updatePosition({ top: `30px`,
    right: `40px`});
  }
}
