export class Food {
    private name: string;
    private price: number;
    private type: string;
    private description: string;
    private quantity: number;

    constructor(name: string, price: number, type: string, description: string, quantity: number) {
        this.name = name;
        this.price = price;
        this.type = type;
        this.description = description;
        this.quantity = quantity;
    }

    getName(): string {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    getPrice(): number {
        return this.price;
    }

    setPrice(value: number) {
        this.price = value;
    }

    getType(): string {
        return this.type;
    }

    setType(value: string) {
        this.type = value;
    }

    getDescription(): string {
        return this.description;
    }

    setDescription(value: string) {
        this.description = value;
    }

    getQuantity(): number {
        return this.quantity;
    }

    setQuantity(value: number) {
        this.quantity = value;
    }
}