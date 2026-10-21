import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MapComponent } from "./map/map.component";



@NgModule({
    declarations:[

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AppComponent,
        MapComponent

    ],
    providers:[ 

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }