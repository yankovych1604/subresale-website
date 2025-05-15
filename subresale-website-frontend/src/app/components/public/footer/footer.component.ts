import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';
import { SUBSCRIPTION } from '../../../_system/_constants';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true,
})

export class FooterComponent {
  public subscriptions: {name: string, url: string}[] = SUBSCRIPTION;
}
