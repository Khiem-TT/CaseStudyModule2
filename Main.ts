import {Food} from "./ObjectClass/Food";
import {FoodManagement} from "./ObjectClass/FoodManagement";
import {AddFood} from "./Function/AddFood";
import {EditFoodByName} from "./Function/EditFoodByName";
import {question} from "readline-sync";
import {ShowFoodsByType} from "./Function/ShowFoodsByType";
import {DeleteFoodsByType} from "./Function/DeleteFoodsByType";

let food1 = new Food('bac siu', 45000, 'coffee', 'iced white filter coffee & condensed milk', 50);
let food2 = new Food('phin den da', 39000, 'coffee', 'iced black coffee', 20);
let food4 = new Food('tra thach dao', 65000, 'tea', 'tea with peach jelly', 40);
let food3 = new Food('chanh day da vien', 55000, 'juice', 'iced passion fruit juice', 30);
let food5 = new Food('huong duong', 25000, 'snack', 'sunflower seeds', 10);
export let foodManagement = new FoodManagement();
export let readlineSync = require('readline-sync');

foodManagement.addFood(food1);
foodManagement.addFood(food2);
foodManagement.addFood(food3);
foodManagement.addFood(food4);
foodManagement.addFood(food5);

console.log('Twice Lost You Coffee hello!\nPlease enter:');

export function Main() {
    let menu: string[] = ['Show menu',
            'Add foods',
            'Edit foods by name',
            'Delete foods by name',
            'Enter food name, search food by name',
            'Show types, select and display foods of that type',
            'Show types, select and delete all foods of that type'],
        index = readlineSync.keyInSelect(menu, 'Select option');
    switch (index) {
        case 0:
            foodManagement.sort();
            console.table(foodManagement.menu);
            Main();
            break;
        case 1:
            AddFood();
            console.log('Add the food successfully!');
            Main();
            break;
        case 2:
            EditFoodByName();
            Main();
            break;
        case 3:
            let nameToBeDelete = question('Enter name: ');
            foodManagement.deleteFood(nameToBeDelete);
            Main();
            break;
        case 4:
            let nameToBeSearch = question('Enter name: ');
            console.table(foodManagement.searchFoodWithSimilarName(nameToBeSearch));
            Main();
            break;
        case 5:
            ShowFoodsByType();
            Main();
            break;
        case 6:
            DeleteFoodsByType();
            Main();
            break;
        default:
            console.log('Goodbye, see you again!');
            break;
    }
}

Main();