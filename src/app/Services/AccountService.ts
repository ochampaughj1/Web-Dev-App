import { Injectable } from "@angular/core";
import { Account } from "../models/Account";
import { Series } from "../models/Series";
import { Book } from "../models/Book";



//temp wishlist data
const series = new Series(7, "Monster", 3, "\tThe GONE series may be over, but it's not the end of the story: When the dome came down, they thought it was the end of the troubles. Truth is, it was just the beginning.Shade Darby witnessed events that day, with devastating consequences, and vowed never to feel that powerless again. Now, four years later, she gets her hands on a part of the meteor that began it all and that s when she changes.Trouble is, Shades not the only one mutating, and the authorities cannot allow these superpowers to go unchecked . . .");
const mon1 = new Book(33, 5, "Monster", 420, "\tIt's been four years since a meteorite hit Perdido Beach and Everyone disappeared. Gone. Everyone, except the kids trapped in the FAYZ - an invisible dome that was created by an alien virus. Inside the FAYZ, animals began to mutate and teens developed dangerous powers. the terrifying new world was plagued with hunger, lies, and fear of the unknown.\n\n\tNow, four years later, meteorites are hitting Earth with a virus that is even deadlier. Humans will mutate into monsters and the whole world will be exposed.\n\n\tBut power corrupts. As some teens begin to morph into heroes, they will find that others become dangerously out of control and that the world is on the brink of a monstrous battle between good and evil.\n\n\tAnd there is only one thing more terrifying than the fear of the unknown: when history repeats itself.", 2000, "./assets/images/monster.jpg", false);
const mon2 = new Book(34, 5, "Villain", 324, "\tIt's been four years since the events of GONE. The Perdido Beach dome is down, but the horrors within have spread. The alien virus-infested rock that created the FAYZ is creating monsters - monsters that walk the cities and countryside, terrorizing all.\n\n\tThere are tanks in the street and predator drones in the sky, doomed efforts to stop the disintegration of civilization. Into this chaos comes a villain with the power to control anyone with just the sound of his voice. Dillon Poe wanted to be a comedian once... but everyone made fun of him. Dillon the loser. Dillon the freak. Now he's sending thousands to their death. Who's laughing now?\n\n\tThe only people who can stop a superpowered villain are superpowered heroes. Dekka, Shade, Cruz, Malik, Armo, and a new mutant with unmatched powers, are all that stand in Dillon's way. But when the lines begin to blur between hero and villain - some begin to wonder who's really the monster.", 2000, "./assets/images/villain.jpg", false);
const mon3 = new Book(35, 5, "Hero", 427, "\tMonster. Villain. Hero.\n\n\tFour years after the Perdido Beach dome went down, the alien virus that created it is still wreaking havoc, and virus-infested rock has created a new set of humans with mutant powers.\n\n\tRockborn gang members Dekka, Shade, Cruz, Malik, Armo, and Francis are fresh off their defeat of Dillon Poe and in need of answers to some very pressing questions about their own powers: who are the Dark Watchers? And what is this Fourth Dimension that only Francis can access?\n\n\tBut heroes don't get down time. When the alien-virus infested rock hits New York, a new foe, Bob Markovic, rises amongst the newly rockborn. Markovic's arrogance and lack of a moral compass already made him unbearable. With his newfound power to inflict a deadly disease, he could send all of humanity into a living hell. As they try to find their footing on morally gray grounds, the Rockborn Gang will have to make some tough decisions if they want to save the world.", 2000, "./assets/images/hero.jpg", false);
const series2 = new Series(8, "Quarantine", 4, "\tIt was just another ordinary day at McKinley High - until a massive explosion devastated the school. When loner David Thorpe tried to help his English teacher to safety, the teacher convulsed and died right in front of him. And that was just the beginning. A year later, McKinley has descended into chaos. All the students are infected with a virus that makes them deadly to adults. The school is under military quarantine. The teachers are gone. Violent gangs have formed based on high school social cliques. Without a gang, you're as good as dead. And David has no gang. It's just him and his little brother, Will, against the whole school.");
const b1 = new Book(36, 6, "The Loners", 404, "\tIt was just another ordinary day at McKinley High - until a massive explosion devastated the school. When loner David Thorpe tried to help his English teacher to safety, the teacher convulsed and died right in front of him. And that was just the beginning.\n\n\tA year later, McKinley has descended into chaos. All the students are infected with a virus that makes them deadly to adults. The school is under military quarantine. The teachers are gone. Violent gangs have formed based on high school social cliques. Without a gang, you're as good as dead. And David has no gang. It's just him and his little brother, Will, against the whole school.", 2000, "./assets/images/the loners.jpg", false);
const b2 = new Book(37, 6, "The Saints", 384, "\tNothing was worse than being locked in - until they opened the door...\n\n\tMcKinley High has been a battle ground for eighteen months since a virus outbreak led to a military quarantine of the school. When the doors finally open, Will and Lucy will think their nightmare is finished. But they are gravely mistaken.\n\n\tAs a new group of teens enters the school and gains popularity, Will and Lucy join new gangs. An epic party on the quad full of real food and drinks, where kids hookup and actually interact with members of other gangs seemed to signal a new, easier existence. Soom after though, the world inside McKinley takes a startling turn for the worse, and Will and Lucy will have to fight harder than ever to survive.", 2000, "./assets/images/the saints.jpg", false);
const b3 = new Book(38, 6, "The Burnouts", 266, "\tWhen an explosion rocks David and Will's suburban high school one morning, a deadly virus is unleashed on the school. After a year of quarantine, with no adults around, the students have created their own society. All of the social cliques have developed into gangs-The Nerds, The Geeks, The Freaks, The Sluts, The Skaters, The Burnouts, The Pretty Ones, and The Varsity-and each gang provides a service with which they can barter for provisions. Without a gang, it's almost impossible to secure food, water, territory, or supplies. In the final installment in the Quarantine trilogy, the brothers are reunited on the Outside and it appears as if, for once everything is going right. But inside the school, Lucy is alone with no gang and no hope, until the Burnouts welcome her into their filthy arms.", 2000, "./assets/images/the burnouts.jpg", false);
const b4 = new Book(39, 6, "The Giant", 345, "\tIn the violent early days of the quarantine, Gonzalo joins a gang of thieves who live in the ductwork of McKinley High School. There he falls in love with Sasha, but as he grows too big to fit, he is forced to leave without her.\n\n\tA year later, he scours the infected zone for her. No matter how many murderers, puncture wounds, or militia he has to survive, Gonzalo can't give up on Sasha.", 2000, "./assets/images/the giant.jpg", false);


//temp accounts for testing
const temp1 = new Account("Jonathan", "ochampaughj1", "1234", [series, mon1, mon2, mon3]);
const temp2 = new Account("Marcel", "williamsm1", "asdf", [series2, b1, b2, b3, b4]);

@Injectable({providedIn: 'root'})
export class AccountService {

    LoggedInUser: any;

    //table of all user accounts
    accountsTable: Account[] = [temp1, temp2];
  
    //checks if the account attempting to login exists
    CheckLogin(username: string, password: string) : boolean {
        for(let i = 0; i < this.accountsTable.length; i++) {
            if(username.toLowerCase() == this.accountsTable[i].Username && password == this.accountsTable[i].Password) {
                return true;
            }
        }
        return false;
    }

    //checks if account exists with given username and checks password
    CheckSignUp(name: string, username: string, password: string, confirm: string) : string {
        if(name == "" || username == "" || password == "" || confirm == "") { return "cannot have blank fields"; }
        if(password != confirm) { return "!matching"; }

        for(let i = 0; i < this.accountsTable.length; i++) {
            if(username.toLowerCase() == this.accountsTable[i].Username) { return "exists"; }
        }
        return "create";
    }

    //creates new account from sign up form information
    CreateAccount(name: string, username: string, password: string) : Account {
        const newAcc = new Account(name, username, password, []);
        this.accountsTable.push(newAcc);
        return newAcc;
    }

    //logs in user to their account
    LoginUser(username: string, password: string) : Account{
        var user = new Account("", "", "", []);
        for(let i = 0; i < this.accountsTable.length; i++) {
            if(this.accountsTable[i].Username == username && this.accountsTable[i].Password == password) {
                user = this.accountsTable[i];
            }
        }
        return user;
    }
}