import { createActionGroup, props } from '@ngrx/store';
import { CharacterGetDTO } from 'src/models/characterGetDTO';

export const CharactersActions = createActionGroup({
  source: 'Characters',
  events: {
    'Load Characters Success': props<{ charactersGetDTO: CharacterGetDTO }>(),
    'Load Characters Failure': props<{ error: unknown }>(),
  },
});
