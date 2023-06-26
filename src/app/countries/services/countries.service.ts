import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map ,catchError, of } from 'rxjs';

//Interfaces
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  constructor(
    private http: HttpClient
  ) { }

  public apiUrl: string = 'https://restcountries.com/v3.1'

  public onSearchCountry( term: string): Observable<Country | null> {                       // queremos devolver solo un pais, no el array, puede que no exista
    
    const url = `${this.apiUrl}/alpha/${term}`

    return this.http.get<Country[]>(url)                                                    // En base al listado de paises que nos da el endpoint
    .pipe(                                                                                  // Metodo pipe para utilziar metodos rjxs
      map( countries => countries.length > 0? countries[0] : null),                         // Convertimos el listado de paises en el primer pais que obtenemos | null
      catchError(error => {                                                                 // Manejamos el error
        console.log(error)
        return of(null);
      })
    )
  }
  public onSearchRestCountries( parameter: string ,term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/${parameter}/${term}`
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(error => {
        console.log(error)
        return of([]);
      })
    )
  }

  
}