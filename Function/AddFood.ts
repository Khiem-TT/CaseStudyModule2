import {foodManagement} from "../Main";
import {question} from "readline-sync";
import {Food} from "../ObjectClass/Food";
import {TypeFood} from "./TypeFood";

export function AddFood() {
    let type: string = TypeFood();
    let name = question('Enter name: ');
    let price = +question('Enter price: ');
    let description = question('Enter description: ');
    let quantity = +question('Enter quantity: ');
    let food = new Food(name, price, type, description, quantity);
    foodManagement.addFood(food);
}