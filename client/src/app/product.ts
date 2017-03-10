/**
 * Created by Ilya on 10.03.2017.
 */

export class Product {
    name: string;
    price: number;
    category: any;

    constructor(name: string, price: number, category: any) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
}