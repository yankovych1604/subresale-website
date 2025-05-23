import { Component } from '@angular/core';
import { SUBSCRIPTION_CATEGORIES } from '../../../_system/_constants';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
  standalone: false,
})
export class AboutUsComponent {
  public subscriptionCategories: {name: string, icons: {name: string, url: string}[], url: string}[] = SUBSCRIPTION_CATEGORIES;
}
