import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CharactersSandbox } from 'src/sandbox/characters.sandbox';
import { SearchService } from 'src/services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  title = 'Rick and Morty';
  charactersGetDTO$ = this.charactersSandbox.charactersSelector$;
  info$ = this.charactersSandbox.info$;
  searchValue: string;
  destroy$: Subject<void> = new Subject<void>();

  constructor(
    private charactersSandbox: CharactersSandbox,
    private searchService: SearchService
  ) {
    this.searchService.emitSearchValueObs
      .pipe(takeUntil(this.destroy$))
      .subscribe((text) => {
        this.searchValue = text;
      });
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
