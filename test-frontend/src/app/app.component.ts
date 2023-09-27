import { Component } from '@angular/core';
import { CharactersSandbox } from 'src/sandbox/characters.sandbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Rick and Morty';
  charactersGetDTO$ = this.charactersSandbox.CharactersSelector$;

  constructor(private charactersSandbox: CharactersSandbox) {}
}
