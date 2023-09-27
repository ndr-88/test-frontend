import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CharactersActions } from 'src/app/actions/characters.actions';
import { CharactersState } from 'src/app/reducers/characters.reducer';
import * as CharactersSelectors from 'src/app/selectors/characters.selectors';
import { CharactersService } from 'src/services/characters.service';

@Injectable()
export class CharactersSandbox {
  CharactersSelector$ = this.store.select(
    CharactersSelectors.selectCharactersGetDTO
  );

  constructor(
    private charactersService: CharactersService,
    private store: Store<CharactersState>
  ) {}

  getCharacters() {
    this.charactersService.getCharacters().subscribe((charactersGetDTO) => {
      this.store.dispatch(
        CharactersActions.loadCharactersSuccess({ charactersGetDTO })
      );
    });
  }
}
