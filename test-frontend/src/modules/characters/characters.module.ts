import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CharactersContainerComponent } from '../../containers/characters-container/characters-container.component';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [CharactersContainerComponent],
  imports: [CommonModule, CardModule],
  exports: [CharactersContainerComponent],
})
export class CharactersModule {}
