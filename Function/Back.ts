import {Main, readlineSync} from "../Main";

export function Back() {
    let input: string = readlineSync.question('Press Enter to go back to main menu');
    if (input === '') {
        Main();
    }
}