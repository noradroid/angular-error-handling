import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ToastsComponent } from './toasts.component';
import { CloseIconComponent } from 'svgs';

@NgModule({
  imports: [CommonModule, CloseIconComponent],
  declarations: [ToastsComponent],
  exports: [ToastsComponent],
})
export class ToastsModule {}
