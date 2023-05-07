import {Main, readlineSync} from "../Main";

export function TypeFood() {
    let menu: string[] = ['coffee', 'tea', 'juice', 'snack'],
        index = readlineSync.keyInSelect(menu, 'Select option');
    switch (index) {
        case 0:
            return 'coffee';
        case 1:
            return 'tea';
        case 2:
            return 'juice';
        case 3:
            return 'snack';
        default:
            Main();
            break;
    }
}