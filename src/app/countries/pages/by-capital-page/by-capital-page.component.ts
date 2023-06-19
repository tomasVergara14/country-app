import { Component } from '@angular/core';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.scss']
})
export class ByCapitalPageComponent {

  public onSearchByCapital( term: string ):void{
    console.log('from by capital page')
    console.log(term)
  }

}
