import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  @Input() contact: Contact;

  @Input() notesColor;

  ngOnInit() {
  }

}