import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchTermPipe } from 'src/app/search-term.pipe';
import { HeaderComponent } from './header/header.component';
import { PillComponent } from './pills/pills.component';

@NgModule({
  declarations: [PillComponent, HeaderComponent, SearchTermPipe],
  imports: [CommonModule],
  exports: [PillComponent, HeaderComponent, SearchTermPipe],
})
export class SharedModule {}
