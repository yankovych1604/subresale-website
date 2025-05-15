import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-intro-block',
  imports: [
    NgIf,
  ],
  templateUrl: './intro-block.component.html',
  styleUrl: './intro-block.component.scss',
  standalone: true,
})
export class IntroBlockComponent {
}
