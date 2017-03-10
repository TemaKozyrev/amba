/**
 * Created by Ilya on 10.03.2017.
 */
import {Product} from './product';

export class DataService{
    categories = ["All", "Pes", "NePes", "Category3", "Cat", "Cat2", "LUL"];

    private products: Product[] = [
        {name: "Pesss", price: Math.floor(Math.random() * (25 - 5) + 25), category: this.categories[1]},
        {name: "Pess", price: Math.floor(Math.random() * (25 - 5) + 25), category: this.categories[1]},
        {name: "Pesn", price: Math.floor(Math.random() * (25 - 5) + 25), category: this.categories[1]},
        {name: "Pe1s", price: Math.floor(Math.random() * (25 - 5) + 25), category: this.categories[1]},
        {name: "Pesgf", price: Math.floor(Math.random() * (25 - 5) + 25), category: this.categories[6]},
        {name: "Pesf", price: Math.floor(Math.random() * (25 - 5) + 25), category: this.categories[3]},
        {name: "P2es", price: Math.floor(Math.random() * (25 - 5) + 25), category: this.categories[1]},
        {name: "Peslol", price: Math.floor(Math.random() * (25 - 5) + 25), category: this.categories[3]},
        {name: "Pes", price: Math.floor(Math.random() * (25 - 5) + 25), category: this.categories[3]},
        {name: "Peski", price: Math.floor(Math.random() * (25 - 5) + 25), category: this.categories[3]},
        {name: "Peskuk", price: Math.floor(Math.random() * (25 - 5) + 25), category: this.categories[6]},
        {name: "Pes3", price: Math.floor(Math.random() * (25 - 5) + 25), category: this.categories[1]},
        {name: "Pesyu", price: Math.floor(Math.random() * (25 - 5) + 25), category: this.categories[4]},
        {name: "Pesww", price: Math.floor(Math.random() * (25 - 5) + 25), category: this.categories[3]},
        {name: "Pesgh", price: Math.floor(Math.random() * (25 - 5) + 25), category: this.categories[5]},
        {name: "Pe3s", price: Math.floor(Math.random() * (25 - 5) + 25), category: this.categories[6]},
        {name: "Pesdgd", price: Math.floor(Math.random() * (25 - 5) + 25), category: this.categories[1]},
        {name: "Pesw", price: Math.floor(Math.random() * (25 - 5) + 25), category: this.categories[4]},
        {name: "Pesa", price: Math.floor(Math.random() * (25 - 5) + 25), category: this.categories[2]},
        {name: "Pesui", price: Math.floor(Math.random() * (25 - 5) + 25), category: this.categories[2]}
    ];

    getCategories(): any {
        return this.categories;
    }

    getProducts(): Product[] {
        return this.products;
    }
}