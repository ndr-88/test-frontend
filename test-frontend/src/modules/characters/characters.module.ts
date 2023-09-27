import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CharactersSandbox } from 'src/sandbox/characters.sandbox';
import { CharactersContainerComponent } from '../../containers/characters-container/characters-container.component';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [CharactersContainerComponent],
  imports: [CommonModule, CardModule],
  exports: [CharactersContainerComponent],
  providers: [CharactersSandbox],
})
export class CharactersModule {}
