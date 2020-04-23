import {Component, EventEmitter, Host, OnInit, Output} from '@angular/core';
import {SUBJECTS} from './mock-subjects';
import {Subject} from './subject';
import {AppComponent} from '../app.component';
import {Observable} from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  @Output() selectedSubjectEvent = new EventEmitter<Subject>();
  selectedSubject: Subject;

  //subjects = SUBJECTS.sort(((a, b) => a.name.localeCompare(b.name)));
  subjects: Observable<any[]>;
  constructor(@Host() appComponent: AppComponent, firestore: AngularFirestore) {
    this.subjects = firestore.collection('subjects').valueChanges();
  }

  ngOnInit(): void {
  }

  onSelect(subject: Subject): void {
    this.selectedSubjectEvent.emit(subject);
    this.selectedSubject = subject;
  }

}
