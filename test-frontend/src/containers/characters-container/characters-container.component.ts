import { Component, Input, OnInit } from '@angular/core';
import { CharacterGetDTO } from 'src/models/characterGetDTO';
import { Result } from 'src/models/result';
import { CharactersSandbox } from 'src/sandbox/characters.sandbox';

@Component({
  selector: 'app-characters-container',
  templateUrl: './characters-container.component.html',
  styleUrls: ['./characters-container.component.scss'],
})
export class CharactersContainerComponent implements OnInit {
  @Input() charactersGetDTO: CharacterGetDTO;

  constructor(private charactersSandbox: CharactersSandbox) {}

  ngOnInit(): void {
    this.charactersSandbox.getCharacters();
  }

  getDescription(result: Result): string {
    let pronoum = result.gender.toLowerCase() === 'male' ? 'He' : 'She';
    let possessiveAdjective =
      result.gender.toLowerCase() === 'male' ? 'his' : 'her';
    let name = result.name.split(' ')[0];
    return `<strong>${name}</strong> origin is <strong>${
      result.origin.name
    }</strong> and ${possessiveAdjective} last known location was <strong>${
      result.location.name
    }</strong>. ${pronoum} was first seen in  <strong> episode ${this.getEpisodeNumber(
      result.episode[0]
    )}</strong> and last seen in <strong> episode ${this.getEpisodeNumber(
      result.episode[result.episode.length - 1]
    )}</strong>.`;
  }

  getEpisodeNumber(url: string): number {
    const pathParts = url.split('/');
    return parseInt(pathParts[pathParts.length - 1], 10);
  }
}
