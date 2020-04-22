import { Component } from '@angular/core';
import { faTwitter, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import {  } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'software-uniguld';
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faGithub = faGithub;
  faBars = faBars;

  showSidebar = false;
  hideMenu() {
    this.showSidebar = !this.showSidebar;
  }
}
