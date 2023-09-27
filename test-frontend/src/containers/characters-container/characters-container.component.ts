import { Component, Input } from '@angular/core';
import { CharacterGetDTO } from 'src/models/characterGetDTO';
import { CharactersSandbox } from 'src/sandbox/characters.sandbox';

@Component({
  selector: 'app-characters-container',
  templateUrl: './characters-container.component.html',
  styleUrls: ['./characters-container.component.scss'],
})
export class CharactersContainerComponent {
  @Input() charactersGetDTO: CharacterGetDTO;

  description =
    "Rick origin is 'Earth (C-137)' and his last known location was 'Citadel of Ricks'. He was first seen in 'episode 1' and last seen in 'episode 99'.";

  constructor(private charactersSandbox: CharactersSandbox) {}

  ngOnInit(): void {
    this.charactersSandbox.getCharacters();
  }
}
