import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'icon-edit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-icon.component.html',
  styleUrls: ['./edit-icon.component.scss'],
})
export class EditIconComponent {
  @Input() size = 6;
}
