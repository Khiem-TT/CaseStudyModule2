import {TypeFood} from "./TypeFood";
import {foodManagement, Main} from "../Main";
import {readlineSync} from "../Main";
import {Back} from "./Back";

export function DeleteFoodsByType() {
    let type = TypeFood();
    if (type !== undefined) {
        let choice: boolean = readlineSync.keyInYN('Are you sure? You want to delete the food?');
        if (choice === false) {
            console.log('Delete action cancelled. Return to main menu.');
            Main();
        } else {
            for (let i = 0; i < foodManagement.menu.length; i++) {
                if (foodManagement.menu[i].getType() === type) {
                    foodManagement.menu.splice(i, 1);
                    i--;
                }
            }
            console.log(`Removed all foods with type is ${type}`);
            Back();
        }
    }
}