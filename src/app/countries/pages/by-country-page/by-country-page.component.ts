import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.scss']
})
export class ByCountryPageComponent implements OnInit {

  constructor(
    private countriesService: CountriesService,
  ){}

  public countries:Country[] = [];
  public termSearched?:string;
  public isLoading : boolean = false;

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountry.countries;
    this.countriesService.cacheStore.byCountry.term? this.termSearched = this.countriesService.cacheStore.byCountry.term : null;
    
  }

  public onSearchByCountry( term: string ):void{
    this.isLoading = true;
    this.countriesService.onSearchRestCountries(term).subscribe( countries=>{
      this.isLoading = false;
      this.countries = countries;
      this.termSearched = term;
    })
  }

}
