import { MovieTvBase } from './../../models/movie-tv-base';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, Pipe } from '@angular/core';
import { type } from 'os';

type ApiResponse = { page: number; results: MovieTvBase[] };

@Injectable({
  providedIn: 'root'
})
export class TmdbApiService {

  baseUrl = 'https://api.themoviedb.org/3';

  option = {
    api_key: '94c0d429050115fa3a44d74ba608771c',
    language: 'pt-BR'
  }

  constructor(private http: HttpClient) { }

  trending(): Observable<MovieTvBase[]> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/trending/all/week`, {
      params: this.option,
    })
      .pipe(map(data => data.results));
  }

  search(query: string): Observable<MovieTvBase[]>{
    return this.http.get <ApiResponse>(`${this.baseUrl}/search/multi`, {
      params: {
        ...this.option, include_adult: false, query,
      },
    })
    .pipe(map((data) => data.results));
  }
  getDetailById(id: number, type: 'movie' | 'tv'): Observable<MovieTvBase>{
    return this.http.get<MovieTvBase>(`${this.baseUrl}/${type}/${id}`, {
      params: this.option,
    });
  }
}
