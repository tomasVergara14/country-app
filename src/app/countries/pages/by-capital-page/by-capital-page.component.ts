import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.scss']
})
export class ByCapitalPageComponent {

  constructor(
    private countriesService: CountriesService
  ){}

  public countries:Country[] = [];
  public isLoading: boolean = false;

  public onSearchByCapital( term: string ):void{

    this.isLoading = true;

    this.countriesService.onSearchRestCountries('capital',term)
    .subscribe( countries=>{

      this.countries = countries;
      this.isLoading = false;

    })
  }

}
