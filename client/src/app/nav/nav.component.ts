import {Component, EventEmitter, Output, ViewChild} from "@angular/core";
import {ModalComponent} from "./modal.component"

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

    @ViewChild(ModalComponent) public readonly modal: ModalComponent;

    @Output() searchFunc = new EventEmitter<string>();

    show: boolean = true;
    login: boolean = true;

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

    changeUserFields() {
        this.show = !this.show;
    }

    openModal(modalPath) {
        this.modal.show();
        this.login = (modalPath === 'login');
    }

    changeModal() {
        this.login = !this.login;
    }

    temp_changeShowFlag() {
        this.show = !this.show;
        this.modal.hide();
    } //temp function before back-end integration
}
