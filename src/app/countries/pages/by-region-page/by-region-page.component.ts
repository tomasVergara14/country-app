import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';


export type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania'

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
  public regions: Region[] = ['Africa','Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion ?: Region;

  public onSearchByRegion( region: Region ):void{

    this.selectedRegion = region;

    this.countriesService.onSearchRestCountries('region',region).subscribe( countries=>{
      this.countries = countries;
    })
    console.log(this.countries)
  }


}
