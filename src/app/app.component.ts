import {Component, OnChanges, OnInit } from '@angular/core';
import { SharedService } from './shared.ser';
import { MapComponent } from "./map/map.component";

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [MapComponent]
})

export class AppComponent {
    constructor(private sharedService: SharedService) {}
    title = 'world-map';
    countryName = ' ';
    countryCap = '';
    countryLongLat = '';
    countryIncome = ' ';
    countryRegion = '';

    getCountryApiData() {
        console.log(this.sharedService.countryApiData)
        const country = this.sharedService.countryApiData[1][0];
        console.log(country);
        this.countryName = country['name'];
        this.countryCap = country['capitalCity'];
        this.countryLongLat = `(${country['latitude']}, ${country['longitude']})`;
        this.countryIncome = country['incomeLevel']['value'];
        this.countryRegion = country['region']['value'];
    }

}