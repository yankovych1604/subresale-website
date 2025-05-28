import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SubscriptionCardComponent } from "../../../components/public/subscription-card/subscription-card.component";
import { FaqItemComponent } from "../../../components/public/faq-item/faq-item.component";
import { IntroBlockComponent } from "../../../components/public/intro-block/intro-block.component";

@NgModule({
  declarations: [
    HomeComponent,
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SubscriptionCardComponent,
        FaqItemComponent,
        IntroBlockComponent,
    ]
})

export class HomeModule { }
