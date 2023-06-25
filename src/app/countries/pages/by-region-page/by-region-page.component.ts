import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.scss']
})
export class ByRegionPageComponent {

  constructor(
    private countriesService: CountriesService,
  ){}

  public countries:Country[] = [];

  public onSearchByRegion( term: string ):void{
    this.countriesService.onSearchRestCountries('region',term).subscribe( countries=>{
      this.countries = countries;
    })
    console.log(this.countries)
  }


}
