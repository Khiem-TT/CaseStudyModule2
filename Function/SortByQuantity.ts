import {foodManagement, readlineSync} from "../Main";
import {Food} from "../ObjectClass/Food";

export function SortByQuantity() {
    let menu: string[] = ['ascending', 'descending'],
        index = readlineSync.keyInSelect(menu, 'Select option');
    switch (index) {
        case 0:
            foodManagement.menu.sort((a: Food, b: Food) => a.getQuantity() - b.getQuantity());
            console.log('Sorted by quantity from low to high!');
            break;
        case 1:
            foodManagement.menu.sort((a: Food, b: Food) => b.getQuantity() - a.getQuantity());
            console.log('Sorted by quantity from high to low!');
            break;
        default:
            foodManagement.sort();
    }
}