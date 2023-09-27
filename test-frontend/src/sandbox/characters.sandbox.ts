import { Injectable } from '@angular/core';
import { CharactersService } from 'src/services/characters.service';

@Injectable()
export class CharactersSandbox {
  constructor(private charactersService: CharactersService) {}

  getCharacters() {
    this.charactersService.getCharacters().subscribe((res) => {
      console.log(res);
    });
  }
}
