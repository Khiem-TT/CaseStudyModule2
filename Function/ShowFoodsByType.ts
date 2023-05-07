import {TypeFood} from "./TypeFood";
import {foodManagement} from "../Main";
import {Food} from "../ObjectClass/Food";

export function ShowFoodsByType() {
    let type = TypeFood();
    let listFoodsByType: Food[] = [];
    for (let i = 0; i < foodManagement.menu.length; i++) {
        if (foodManagement.menu[i].getType() === type) {
            listFoodsByType.push(foodManagement.menu[i]);
        }
    }
    console.table(listFoodsByType);
}