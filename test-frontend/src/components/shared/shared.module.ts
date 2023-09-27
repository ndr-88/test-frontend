import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PillComponent } from './pills/pills.component';

@NgModule({
  declarations: [PillComponent],
  imports: [CommonModule],
  exports: [PillComponent],
})
export class SharedModule {}
