import {TypeFood} from "./TypeFood";
import {foodManagement} from "../Main";

export function DeleteFoodsByType() {
    let type = TypeFood();
    for (let i = 0; i < foodManagement.menu.length; i++) {
        if (foodManagement.menu[i].getType() === type) {
            foodManagement.menu.splice(i, 1);
            i--;
        }
    }
    console.log(`Removed all foods with type is ${type}`);
}