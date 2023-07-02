import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';


export type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania' | ''

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.scss']
})


export class ByRegionPageComponent implements OnInit {

  constructor(
    private countriesService: CountriesService,
  ){}

  public countries:Country[] = [];
  public regions: Region[] = ['Africa','Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion ?: Region;

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  public onSearchByRegion( region: Region ):void{

    this.selectedRegion = region;

    this.countriesService.onSearchRegionCountries(region).subscribe( countries=>{
      this.countries = countries;
    })
    console.log(this.countries)
  }


}
