import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map ,catchError, of, tap } from 'rxjs';

//Interfaces
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store';
import { Region } from '../pages/by-region-page/by-region-page.component';

@Injectable({providedIn: 'root'})
export class CountriesService {

  constructor(
    private http: HttpClient
  ) { }

  public cacheStore :CacheStore ={
    byCapital:{ term: '', countries: []},
    byCountry:{term: '', countries: []},
    byRegion:{region:'', countries: []}
  }

  public apiUrl: string = 'https://restcountries.com/v3.1'

  private saveToLocalStorage (): void{
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore))
  }

  private getLocalStorage(){
    if(!localStorage.getItem('cacheStore')) return;

    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!)
  }

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
  
  public onSearchRestCountries( term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`
    return this.http.get<Country[]>(url)
    .pipe(
      tap( countries => this.cacheStore.byCountry = { term: term, countries: countries }),
      tap( ()=> this.saveToLocalStorage),
      catchError(error => {
        console.log(error)
        return of([]);
      })
    )
  }
  
  public onSearchCapitalCountries(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`
    return this.http.get<Country[]>(url)
    .pipe(
      tap( countries => this.cacheStore.byCapital = { term: term, countries: countries }),
      tap( ()=> this.saveToLocalStorage),
      catchError(error => {
        console.log(error)
        return of([]);
      })
    )
  }
  
  public onSearchRegionCountries( region: Region): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`
    return this.http.get<Country[]>(url)
    .pipe(
      tap( countries => this.cacheStore.byRegion = { region: region, countries: countries }),
      tap( ()=> this.saveToLocalStorage),
      catchError(error => {
        console.log(error)
        return of([]);
      })
    )
  }

  
}