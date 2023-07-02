import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.scss']
})
export class ByCapitalPageComponent implements OnInit {

  constructor(
    private countriesService: CountriesService
  ){}
  public countries:Country[] = [];
  public isLoading: boolean = false;
  public termSearched?: string;

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.countriesService.cacheStore.byCapital.term? this.termSearched = this.countriesService.cacheStore.byCapital.term : null;

  }

  public onSearchByCapital( term: string ):void{

    this.isLoading = true;

    this.countriesService.onSearchCapitalCountries(term)
    .subscribe( countries=>{

      this.countries = countries;
      this.isLoading = false;
      this.termSearched = term;

    })
  }

}
