import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterGetDTO } from 'src/models/characterGetDTO';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  url: string = 'https://rickandmortyapi.com/api/character';
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<CharacterGetDTO> {
    return this.http.get<CharacterGetDTO>(this.url);
  }
}
