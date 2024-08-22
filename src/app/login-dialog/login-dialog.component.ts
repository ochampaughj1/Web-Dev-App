import { Component, Inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { MatDialog, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent,} from '@angular/material/dialog';
import { AccountService } from '../data/AccountService';

@Component({
  selector: 'app-login-dialog',
  standalone: true,
  imports: [NgIf],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.css'
})
export class LoginDialogComponent {
  constructor(private accountService: AccountService) {}

  newUser: boolean = false;

  //switches between login and sign up views
  displaySwitch() {
    if(this.newUser == false) { this.newUser = true;}
    else { this.newUser = false; }
  }

  LoginClick() {
    //get values of input textboxes
    var username = ((document.getElementById("lusername") as HTMLInputElement).value);
    var password = ((document.getElementById("lpassword") as HTMLInputElement).value);
    if(this.accountService.CheckLogin(username, password)) {
      alert("Success!");
    }
    else {
      alert("Incorrect Credentials!");
    }
  }

  SignUpClick() {
    //get values of input textboxes//get values of input textboxes
    var name = ((document.getElementById("name") as HTMLInputElement).value);
    var username = ((document.getElementById("username") as HTMLInputElement).value);
    var password = ((document.getElementById("password") as HTMLInputElement).value);
    var confirm = ((document.getElementById("confirm") as HTMLInputElement).value);

    //STILL NEEDS EDGE CASE IMPLEMENTATION CHECKS
    //need to add in white space checking and move password confirmation to account service
    var result = this.accountService.CheckSignUp(name, username, password, confirm); 
    //alerts for faulty sign in 
    if(result == "cannot have blank fields") { alert("cannot have blank fields"); }
    else if(result == "!matching") { alert("passwords dont match"); }
    else if(result == "exists") { alert("username already in use"); }
    else if(result == "create") { alert("create user"); }
  }
}
