import { Book } from "./Book";
import { Series } from "./Series";

/* Model for Account object */
export class Account {
    Name: string; 
    Username: string;
    Password: string;
    WishList: (Book | Series)[] = [];

    constructor(name: string, username: string, password: string, wishlist: (Book | Series)[]) {
        this.Name = name;
        this.Username = username;
        this.Password = password;
        this.WishList = wishlist;
    }
}