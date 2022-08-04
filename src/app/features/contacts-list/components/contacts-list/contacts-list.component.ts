import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ContactsListService } from '../../services/contacts-list.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts: Contact[] | undefined ;
  constructor(private contactListService: ContactsListService) { }

  ngOnInit(): void {
    this.getContactsList();
  }

  getContactsList(){
     this.contactListService.getContacts().subscribe((res:any)=>{
      this.contacts = res;
     });
  }

}
