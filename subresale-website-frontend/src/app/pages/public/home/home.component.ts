import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../../_system/_services/courses/courses.service';
import { SubscriptionsResponse } from '../../../_system/_interfaces/subscriptions';
import { FAQS } from '../../../_system/_constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false,
})

export class HomeComponent implements OnInit {
  public subscriptionList?: SubscriptionsResponse[];
  public faqsList: {question: string, answer: string}[] = FAQS;

  constructor(
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService,
  ) {}

  ngOnInit() {
    const url = this.activatedRoute.snapshot.params['home'] ?? 'home';

    // this.loadAllCourses();
  }

  loadAllCourses() {
    this.coursesService.getAllCourses().subscribe(data => {
      this.subscriptionList = data;
    })
  }
}
