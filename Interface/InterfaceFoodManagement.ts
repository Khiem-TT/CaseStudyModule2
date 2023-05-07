import {Food} from "../ObjectClass/Food";

export interface InterfaceFoodManagement {
    menu: Food[];

    addFood(food: Food);

    searchFoodWithSimilarName(similarName: string);

    searchFoodByType(type: string);

    deleteFood(name: string);

    updateFood(oldName: string, name: string, price: number, type: string, description: string, quantity: number);

    sort();
}