import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input()contact:[{nome:string,numero:string}];
  @Output()user=new EventEmitter<number>();
  @Output()userUpdate=new EventEmitter<number>();

  

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * name
   */
  public getContact() {
    return this.contact;
  }


  removeUser(i){
    console.log(i);
    this.user.emit(i);
  }


  updateUser(i){
    this.userUpdate.emit(i);
  }
  

}
