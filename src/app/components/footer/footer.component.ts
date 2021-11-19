import { Component, OnInit } from '@angular/core';
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faGithub = faGithub;
  faTelegram = faTelegram;
  faEnvelopeSquare = faEnvelopeSquare;
  faPhoneSquare = faPhoneSquare;

  constructor() { }

  ngOnInit() {
  }

}
