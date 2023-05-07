import {question} from "readline-sync";
import {foodManagement} from "../Main";

export function EditFoodByName() {
    let oldName = question('Enter the name of the food to be edited: ');
    let name = question('Enter new name: ');
    let price = +question('Enter new price: ');
    let type = question('Enter new type: ');
    let description = question('Enter new description: ');
    let quantity = +question('Enter new quantity: ');
    foodManagement.updateFood(oldName, name, price, type, description, quantity);
}