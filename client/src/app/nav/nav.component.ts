import {Component, EventEmitter, Output} from "@angular/core";

export class City {
    name: string;
    available: boolean;

    constructor(name: string, available: boolean) {
        this.name = name;
        this.available = available;
    }
}

@Component({
    selector: 'navigation',
    templateUrl: 'nav.component.html',
    styleUrls: ['nav.component.css']
})

export class NavComponent {

    @Output() searchFunc = new EventEmitter<string>();

    cities: City[] =
        [
            {name: "All cities", available: true},
            {name: "Saint-Petersburg", available: true},
            {name: "Florida", available: true},
            {name: "London", available: false},
            {name: "Сыр", available: false}
        ];

    changeName(i) : void {
        document.getElementById('cityName').innerHTML = this.cities[i].name + ' <span class="caret"></span>';
    }

    search(text) {
        this.searchFunc.emit(text);
    }
}
