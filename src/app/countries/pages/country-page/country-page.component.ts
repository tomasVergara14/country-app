import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { catchError, switchMap, of } from 'rxjs';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss']
})
export class CountryPageComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService,
  ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.countriesService.onSearchCountry( id ) ),
      catchError(error => {return of(null)})
    )
    .subscribe( country =>{                                    // Recibe ya la info procesada por el metodo y devuelve o null o un pais
      
      if(!country){
        return this.router.navigateByUrl('');
      }
      console.log('We have a country')
      return;

    })
  }

}
