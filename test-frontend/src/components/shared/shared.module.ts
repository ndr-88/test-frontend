import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { PillComponent } from './pills/pills.component';

@NgModule({
  declarations: [PillComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [PillComponent, HeaderComponent],
})
export class SharedModule {}
