/**
 * Created by Ilya on 21.03.2017.
 */
import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {DataService} from '../first.service';

@Component({
    selector: 'side-menu',
    templateUrl: './sidemenu.component.html',
    styleUrls: ['./sidemenu.component.css'],
    providers: [DataService]
})

export class SidemenuComponent implements OnInit {
    categories = [];
    constructor(private dataService: DataService){}

    @Output() filterCategories = new EventEmitter<string>();

    categoryTitle = 'Categories';

    categoryFilter(category): void {
        this.filterCategories.emit(category);
    }

    ngOnInit(){
        this.categories = this.dataService.getCategories();
    }
}
