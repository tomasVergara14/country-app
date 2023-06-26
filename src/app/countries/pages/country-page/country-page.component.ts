import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

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
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.countriesService.onSearchCountry( id ) )
    )
    .subscribe( resp =>{                                       // Reacciona a cambios en los parametros de la ruta  

      console.log( resp )
      // this.countriesService.onSearchCountry( id )

      // .subscribe( alphaCountry => { //Un subscribe dentro de otro
      //   console.log(alphaCountry)

      // })

    })
  }

}
