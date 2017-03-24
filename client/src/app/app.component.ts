import {Component, OnInit} from "@angular/core";
import {DataService} from './first.service';
import {Product} from './product';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [DataService]
})

export class AppComponent implements OnInit {
    products: Product[] = [];
    categories = [];
    constructor(private dataService: DataService){}

    title = 'Popular items';

    categoryFilter(category): void {
        this.products = this.dataService.getProducts();
        if (category !== "All") {
            this.products = this.products.filter((item) => item.category == category);
        }
    }

    searchOnPage(text){
        this.products = this.dataService.getProducts();
        this.products = this.products.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()));
    }

    ngOnInit(){
        this.categories = this.dataService.getCategories();
        this.products = this.dataService.getProducts();
    }
}
