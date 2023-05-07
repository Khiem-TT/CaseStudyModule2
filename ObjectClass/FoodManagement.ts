import {Food} from "./Food";
import {InterfaceFoodManagement} from "../Interface/InterfaceFoodManagement";
import {readlineSync} from "../Main";
import {SortByPrice} from "../Function/SortByPrice";
import {SortByQuantity} from "../Function/SortByQuantity";

export class FoodManagement implements InterfaceFoodManagement {
    menu: Food[] = [];

    constructor() {
    }

    addFood(food: Food) {
        this.menu.push(food);
    }

    searchFoodWithSimilarName(similarName: string) {
        let flag: boolean;
        for (let i = 0; i < this.menu.length; i++) {
            if (this.menu[i].getName().includes(similarName) === true) {
                return this.menu[i];
            } else {
                flag = false;
            }
        }
        if (!flag) console.log("Can't find food!");
    }

    searchFoodByType(type: string) {
        let flag: boolean;
        for (let i = 0; i < this.menu.length; i++) {
            if (this.menu[i].getType() === type) {
                return this.menu[i];
            } else {
                flag = false;
            }
        }
        if (!flag) console.log("Can't find food!");
    }

    deleteFood(name: string) {
        let result = this.searchFoodWithSimilarName(name);
        let index: number;
        let flag: boolean = false;
        for (let i = 0; i < this.menu.length; i++) {
            if (this.menu[i] === result) {
                index = i;
                flag = true;
            }
        }
        if (flag) {
            this.menu.splice(index, 1);
            console.log('Delete the food successfully!');
        } else {
            console.log('Deleting the food failed, please try again and re-enter the name of the food!');
        }
    }

    updateFood(oldName: string, name: string, price: number, type: string, description: string, quantity: number) {
        let result = this.searchFoodWithSimilarName(oldName);
        let flag: boolean = false;
        for (let i = 0; i < this.menu.length; i++) {
            if (this.menu[i] === result) {
                this.menu[i].setName(name);
                this.menu[i].setPrice(price);
                this.menu[i].setType(type);
                this.menu[i].setDescription(description);
                this.menu[i].setQuantity(quantity);
                flag = true;
            }
        }
        if (flag) {
            console.log('Edit the food successfully!');
        } else {
            console.log('Editing the food failed, please try again and re-enter the food name!');
        }
    }

    sort() {
        let menu: string[] = ['sort by price', 'sort by quantity'],
            index = readlineSync.keyInSelect(menu, 'Select option');
        switch (index) {
            case 0:
                SortByPrice();
                break;
            case 1:
                SortByQuantity();
                break;
        }
    }
}