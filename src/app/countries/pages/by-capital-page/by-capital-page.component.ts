import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.scss']
})
export class ByCapitalPageComponent {

  constructor(
    private countriesService: CountriesService
  ){}

  public onSearchByCapital( term: string ):void{
    this.countriesService.onSearchCapital(term).subscribe(data=>{
      console.log(data);
    })
  }

}
