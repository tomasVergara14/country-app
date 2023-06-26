import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss']
})
export class CountryPageComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( ({ id })=>{                                       // Reacciona a cambios en los parametros de la ruta
      
      console.log( { params: id } )
      this.countriesService.onSearchRestCountries('alpha', id).subscribe( alphaCountry => { //Un subscribe dentro de otro
        console.log(alphaCountry)
      })

    })
  }

}
