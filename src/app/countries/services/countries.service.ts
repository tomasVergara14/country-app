import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

//Interfaces
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  constructor(
    private http: HttpClient
  ) { }

  public apiUrl: string = 'https://restcountries.com/v3.1'

  public onSearchCapital( term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(error => {
        console.log(error)
        return of([]);
      })
    )
  }
  
}