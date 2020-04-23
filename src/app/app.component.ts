import { Component } from '@angular/core';
import { faTwitter, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import {  } from '@fortawesome/free-regular-svg-icons';
import { faBars, faLanguage } from '@fortawesome/free-solid-svg-icons';
import {Subject} from './subjects/subject';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'software-uniguld';
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faGithub = faGithub;
  faBars = faBars;
  faLanguage = faLanguage;

  showSidebar = false;
  selectedSubject: Subject;
  constructor(firestore: AngularFirestore) {

  }
  hideMenu() {
    this.showSidebar = !this.showSidebar;
  }

  getSelectedSubject(subject: Subject): void {
    this.selectedSubject = subject;
  }
}
