import {Component, EventEmitter, Host, OnInit, Output} from '@angular/core';
import {SUBJECTS} from './mock-subjects';
import {Subject} from './subject';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  @Output() selectedSubjectEvent = new EventEmitter<Subject>();
  selectedSubject: Subject;

  subjects = SUBJECTS.sort(((a, b) => a.name.localeCompare(b.name)));

  constructor(@Host() appComponent: AppComponent) { }

  ngOnInit(): void {
  }

  onSelect(subject: Subject): void {
    this.selectedSubjectEvent.emit(subject);
    this.selectedSubject = subject;
  }

}
