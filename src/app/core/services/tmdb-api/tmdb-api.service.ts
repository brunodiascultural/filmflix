import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TmdbApiService {

  baseUrl = 'https://api.themoviedb.org/3/';

  option = {
    api_key: '94c0d429050115fa3a44d74ba608771c',
    language: 'pt-BR'
  }

  constructor() { }
}
