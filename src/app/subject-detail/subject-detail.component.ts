import {Component, Input, OnInit} from '@angular/core';
import {Subject} from '../subjects/subject';

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.scss']
})
export class SubjectDetailComponent implements OnInit {
  @Input() subject: Subject;

  constructor() { }

  ngOnInit(): void {
  }

}
