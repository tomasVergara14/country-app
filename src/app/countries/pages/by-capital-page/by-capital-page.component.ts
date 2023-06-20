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

  public onSearchByCapital( term: string ):void{
    this.countriesService.onSearchCapital(term).subscribe( countries=>{
      this.countries = countries;
      console.log(countries)
    })
  }

}
