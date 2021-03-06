import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {NavComponent} from "./nav/nav.component";
import {ModalComponent} from "./nav/modal.component";
import {SidemenuComponent} from "./sidemenu/sidemenu.component";
import {FooterComponent} from "./footer/footer.component";

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        ModalComponent,
        SidemenuComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
