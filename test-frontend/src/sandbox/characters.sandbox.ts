import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { CharactersActions } from 'src/actions/characters.actions';
import { Result } from 'src/models/result';
import { CharactersState } from 'src/reducers/characters.reducer';
import * as CharactersSelectors from 'src/selectors/characters.selectors';
import { CharactersService } from 'src/services/characters.service';

@Injectable()
export class CharactersSandbox implements OnDestroy {
  charactersSelector$ = this.store.select(CharactersSelectors.selectCharacters);
  info$ = this.store.select(CharactersSelectors.selectInfo);
  emitPage: Subject<string> = this.charactersService.emitPage;
  emitPageObs = this.emitPage.asObservable();
  destroy$: Subject<void> = new Subject<void>();

  constructor(
    private charactersService: CharactersService,
    private store: Store<CharactersState>
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getCharacters(url?: string) {
    if (url) {
      this.charactersService
        .getCharacters(url)
        .subscribe((charactersGetDTO) => {
          this.store.dispatch(
            CharactersActions.loadCharactersSuccess({ charactersGetDTO })
          );
        });
    } else {
      this.charactersService.getCharacters().subscribe((charactersGetDTO) => {
        this.store.dispatch(
          CharactersActions.loadCharactersSuccess({ charactersGetDTO })
        );
      });
    }
  }

  updateCharacters(characters: Result[]) {
    this.store.dispatch(CharactersActions.updateCharacters({ characters }));
  }
}
