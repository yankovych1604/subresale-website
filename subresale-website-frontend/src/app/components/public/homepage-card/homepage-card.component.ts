import { Component, Input } from '@angular/core';
import { SubscriptionsResponse } from '../../../_system/_interfaces/subscriptions';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepage-card',
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './homepage-card.component.html',
  styleUrl: './homepage-card.component.scss',
  standalone: true
})
export class HomepageCardComponent {
  @Input() subscription?: SubscriptionsResponse;

  getCurrencyWord(value: number | null | undefined): string {
    const num = Math.floor(value ?? 0) % 100;
    const lastDigit = num % 10;

    if (num > 10 && num < 20) {
      return 'гривень';
    }

    if (lastDigit === 1) {
      return 'гривня';
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
      return 'гривні';
    }

    return 'гривень';
  }
}
