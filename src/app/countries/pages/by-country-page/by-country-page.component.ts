import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.scss']
})
export class ByCountryPageComponent {

  constructor(
    private countriesService: CountriesService,
  ){}

  public countries:Country[] = [];

  public onSearchByCountry( term: string ):void{
    this.countriesService.onSearchRestCountries('name',term).subscribe( countries=>{
      this.countries = countries;
    })
  }

}
