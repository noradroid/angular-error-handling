import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'icon-close',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './close-icon.component.html',
  styleUrls: ['./close-icon.component.scss'],
})
export class CloseIconComponent {
  faXmark = faXmark;
}
