import {Component} from "@angular/core";

export class City {
    name: string;
    available: boolean;

    constructor(name: string, available: boolean) {
        this.name = name;
        this.available = available;
    }
}

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

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    title = 'Popular items';
    categoryTitle = 'Categories';
    cities: City[] =
        [
            {name: "Saint-Petersburg", available: true},
            {name: "Florida", available: false},
            {name: "London", available: false},
            {name: "Сыр", available: true}
        ];
    categories = ["Pes", "Category2", "Category3", "Category4", "Category5", "Category6"];
    products: Product[] =
        [
            {name: "Pes", price: 10, category: this.categories[1]},
            {name: "Pes", price: 10, category: 'pesik'},
            {name: "Pes", price: 10, category: 'pes3'},
            {name: "Pes", price: 10, category: 'peser'},
            {name: "Pes", price: 10, category: this.categories[0]},
            {name: "Pes", price: 10, category: 'pes'}
        ];
    changeName(i) : void {
        document.getElementById('cityName').innerHTML = this.cities[i].name + ' <span class="caret"></span>';
    }
}
