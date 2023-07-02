import { Country } from "./country";
import { Region } from "../pages/by-region-page/by-region-page.component";

export interface CacheStore {
    byCapital: TermCapital,
    byCountry: TermCountries,
    byRegion: TermRegion
}

export interface  TermCountries{
    term: string,
    countries: Country[]
}
export interface TermCapital{
    term: string,
    countries: Country[]
}
export interface TermRegion{
    region?: Region,
    countries: Country[]
}